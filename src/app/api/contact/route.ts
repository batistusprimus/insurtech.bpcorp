import { NextRequest, NextResponse } from 'next/server';
import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const DATABASE_ID = process.env.NOTION_DATABASE_ID;

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

    // Préparer les données pour Notion
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

    // Ajouter les champs optionnels
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

    // Ajouter les champs spécifiques aux leads
    if (type === 'leads') {
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
    }

    const notionData = {
      parent: { database_id: DATABASE_ID! },
      properties
    };

    // Créer l'entrée dans Notion
    const response = await notion.pages.create(notionData);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Form submitted successfully',
        notionId: response.id 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error submitting form:', error);
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    );
  }
} 