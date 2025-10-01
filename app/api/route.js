import nodemailer from 'nodemailer';

export async function POST(req, res) {
  const { firstname, lastname, emailaddress, phonenumber, message } = await req.json();

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  let mailOptions = {
    from: 'enquiries.i11labs@gmail.com',
    to: 'connect@i11labs.com',
    subject: `You received a new enquiry`,
    text: `
      FirstName: ${firstname}
      LastName: ${lastname}
      Email: ${emailaddress}
      Phone Number: ${phonenumber}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ status: 'Ok', message: 'Email sent successfully' }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ status: 'Error', message: error.message }), { status: 500 });
  }
}
