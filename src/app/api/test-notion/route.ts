import { NextRequest, NextResponse } from 'next/server';
import { Client } from '@notionhq/client';

export async function GET(request: NextRequest) {
  try {
    // Vérifier les variables d'environnement
    const notionToken = process.env.NOTION_TOKEN;
    const notionDatabaseId = process.env.NOTION_DATABASE_ID;

    console.log('Environment check:');
    console.log('- NOTION_TOKEN exists:', !!notionToken);
    console.log('- NOTION_DATABASE_ID exists:', !!notionDatabaseId);
    console.log('- NOTION_DATABASE_ID value:', notionDatabaseId);

    if (!notionToken || !notionDatabaseId) {
      return NextResponse.json({
        error: 'Missing environment variables',
        notionToken: !!notionToken,
        notionDatabaseId: !!notionDatabaseId
      }, { status: 400 });
    }

    // Tester la connexion Notion
    const notion = new Client({
      auth: notionToken,
    });

    try {
      // Tester l'accès à la base de données
      const database = await notion.databases.retrieve({
        database_id: notionDatabaseId,
      });

      console.log('Database retrieved successfully:', database);

      // Tester la création d'une entrée de test
      const testEntry = await notion.pages.create({
        parent: {
          database_id: notionDatabaseId,
        },
        properties: {
          'Name': {
            title: [
              {
                text: {
                  content: 'Test Entry - ' + new Date().toISOString()
                }
              }
            ]
          },
          'Email': {
            email: 'test@example.com'
          },
          'Company': {
            rich_text: [
              {
                text: {
                  content: 'Test Company'
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
        },
      });

      console.log('Test entry created successfully:', testEntry.id);

      return NextResponse.json({
        success: true,
        message: 'Notion integration is working correctly',
        databaseId: notionDatabaseId,
        testEntryId: testEntry.id,
        environment: process.env.NODE_ENV
      });

    } catch (notionError: any) {
      console.error('Notion API error:', notionError);
      
      return NextResponse.json({
        error: 'Notion API error',
        details: notionError.message,
        code: notionError.code,
        status: notionError.status
      }, { status: 500 });
    }

  } catch (error) {
    console.error('General error:', error);
    return NextResponse.json({
      error: 'General error',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
} 