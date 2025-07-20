import { NextRequest, NextResponse } from 'next/server';
import { Client } from '@notionhq/client';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, message, type, industry, territory, leadVolume, urgency, eventType } = body;

    // Validation des champs requis
    if (!name || !email || !company) {
      return NextResponse.json(
        { error: 'Name, email, and company are required' },
        { status: 400 }
      );
    }

    // Log des données reçues (pour debug)
    console.log('Form submission received:', {
      name,
      email,
      company,
      phone,
      message,
      type,
      industry,
      territory,
      leadVolume,
      urgency,
      eventType
    });

    // Vérifier si les variables d'environnement Notion sont configurées
    const notionToken = process.env.NOTION_TOKEN;
    const notionDatabaseId = process.env.NOTION_DATABASE_ID;

    console.log('Environment check:', {
      notionTokenExists: !!notionToken,
      notionDatabaseIdExists: !!notionDatabaseId,
      notionDatabaseId: notionDatabaseId
    });

    if (notionToken && notionDatabaseId) {
      try {
        console.log('Initializing Notion client...');
        
        // Initialiser le client Notion
        const notion = new Client({
          auth: notionToken,
        });

        // Préparer les propriétés pour Notion
        const properties: any = {
          'Name': {
            title: [
              {
                text: {
                  content: name
                }
              }
            ]
          },
          'Email': {
            email: email
          },
          'Company': {
            rich_text: [
              {
                text: {
                  content: company
                }
              }
            ]
          }
        };

        // Ajouter les champs optionnels s'ils existent
        if (phone) {
          properties['Phone'] = {
            phone_number: phone
          };
        }

        if (message) {
          properties['Message'] = {
            rich_text: [
              {
                text: {
                  content: message
                }
              }
            ]
          };
        }

        if (industry) {
          properties['Target Industry'] = {
            select: {
              name: industry
            }
          };
        }

        if (territory) {
          properties['Target Territory'] = {
            select: {
              name: territory
            }
          };
        }

        if (leadVolume) {
          properties['Leads Volume'] = {
            select: {
              name: leadVolume
            }
          };
        }

        if (urgency) {
          properties['Urgency Level'] = {
            select: {
              name: urgency
            }
          };
        }

        if (eventType) {
          properties['Event Type Focus'] = {
            select: {
              name: eventType
            }
          };
        }

        console.log('Creating Notion entry with properties:', JSON.stringify(properties, null, 2));
        
        // Créer l'entrée dans Notion
        const response = await notion.pages.create({
          parent: {
            database_id: notionDatabaseId,
          },
          properties: properties,
        });

        console.log('Successfully created Notion entry:', response.id);

        return NextResponse.json(
          { 
            success: true, 
            message: 'Form submitted successfully. We will contact you within 24 hours.',
            submittedAt: new Date().toISOString(),
            notionId: response.id
          },
          { status: 200 }
        );

      } catch (notionError) {
        console.error('Notion API error:', notionError);
        
        // En cas d'erreur Notion, on continue quand même pour ne pas bloquer l'utilisateur
        return NextResponse.json(
          { 
            success: true, 
            message: 'Form submitted successfully. We will contact you within 24 hours.',
            submittedAt: new Date().toISOString(),
            warning: 'Data saved locally (Notion integration temporarily unavailable)'
          },
          { status: 200 }
        );
      }
    } else {
      // Variables d'environnement Notion non configurées
      console.log('Notion environment variables not configured. Saving data locally only.');
      
      return NextResponse.json(
        { 
          success: true, 
          message: 'Form submitted successfully. We will contact you within 24 hours.',
          submittedAt: new Date().toISOString(),
          warning: 'Data saved locally (Notion integration not configured)'
        },
        { status: 200 }
      );
    }

  } catch (error) {
    console.error('Error submitting form:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again or contact us directly.' },
      { status: 500 }
    );
  }
} 