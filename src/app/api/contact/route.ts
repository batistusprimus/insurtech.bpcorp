import { NextRequest, NextResponse } from 'next/server';

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

    // Pour le moment, on simule un succès sans Notion
    // TODO: Configurer Notion ou un autre service de stockage
    
    // Envoyer un email de notification (optionnel)
    // TODO: Configurer un service d'email comme SendGrid ou Resend

    return NextResponse.json(
      { 
        success: true, 
        message: 'Form submitted successfully. We will contact you within 24 hours.',
        submittedAt: new Date().toISOString()
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error submitting form:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again or contact us directly.' },
      { status: 500 }
    );
  }
} 