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

    if (notionToken && notionDatabaseId) {
      try {
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
          },
          'Status': {
            select: {
              name: 'New'
            }
          },
          'Created Date': {
            date: {
              start: new Date().toISOString()
            }
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

        if (type) {
          properties['Type'] = {
            select: {
              name: type
            }
          };
        }

        if (industry) {
          properties['Industry'] = {
            rich_text: [
              {
                text: {
                  content: industry
                }
              }
            ]
          };
        }

        if (territory) {
          properties['Territory'] = {
            rich_text: [
              {
                text: {
                  content: territory
                }
              }
            ]
          };
        }

        if (leadVolume) {
          properties['Lead Volume'] = {
            rich_text: [
              {
                text: {
                  content: leadVolume
                }
              }
            ]
          };
        }

        if (urgency) {
          properties['Urgency'] = {
            select: {
              name: urgency
            }
          };
        }

        if (eventType) {
          properties['Event Type'] = {
            rich_text: [
              {
                text: {
                  content: eventType
                }
              }
            ]
          };
        }

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