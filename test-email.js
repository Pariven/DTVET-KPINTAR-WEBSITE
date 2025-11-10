const { Resend } = require('resend');
require('dotenv').config({ path: '.env.local' });

async function testEmail() {
  console.log('🧪 Testing Resend email...');
  console.log('📧 Resend API Key exists:', !!process.env.RESEND_API_KEY);
  console.log('📧 API Key starts with:', process.env.RESEND_API_KEY?.substring(0, 10) + '...');
  
  const resend = new Resend(process.env.RESEND_API_KEY);
  
  try {
    const result = await resend.emails.send({
      from: 'DTVET <onboarding@resend.dev>',
      to: 'pariventheswaran@gmail.com',
      subject: 'Test Email from DTVET',
      html: '<h1>Test Email</h1><p>This is a test email to verify Resend is working.</p>'
    });
    
    console.log('✅ Email sent successfully!');
    console.log('📧 Result:', result);
  } catch (error) {
    console.error('❌ Failed to send email:');
    console.error(error);
  }
}

testEmail();