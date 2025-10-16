// import nodemailer from 'nodemailer';

// export async function POST(req, res) {
//   const { firstname, lastname, emailaddress, phonenumber, message } = await req.json();
 
//   let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.GMAIL_USER,
//       pass: process.env.GMAIL_PASS,
//       // user: "shashinjain81@gmail.com",
//       // pass: "mify vlrs zbtq scxc",
//     },
//   });

//   let mailOptions = {
//     from: emailaddress,
//     to: 'shashinjain81@gmail.com',
//     subject: `You received a new enquiry`,
//     text: `
//       FirstName: ${firstname}
//       LastName: ${lastname}
//       Email: ${emailaddress}
//       Phone Number: ${phonenumber}
//       Message: ${message}
//     `,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     return new Response(JSON.stringify({ status: 'Ok', message: 'Email sent successfully' }), { status: 200 });
//   } catch (error) {
//     return new Response(JSON.stringify({ status: 'Error', message: error.message }), { status: 500 });
//   }
// }




// import nodemailer from "nodemailer";
// export async function POST(request) {
//   const body = await request.json();
//   const { firstname, lastname, emailaddress, phonenumber, message } = body;

//   try {
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: "shashinjain81@gmail.com",
//         pass: "mify vlrs zbtq scxc",
//       },
//     });

//     const mailOptions = {
//       from: "shashinjain81@gmail.com",
//       to: "shashinjain8@gmail.com",
//       subject: "New enquiry from website",
//       text: `
//         First Name: ${firstname}
//         Last Name: ${lastname}
//         Email: ${emailaddress}
//         Phone Number: ${phonenumber}
//         Message: ${message}
//       `,
//     };

//     await transporter.sendMail(mailOptions);

//     return new Response(JSON.stringify({ success: true, message: "Email sent successfully!" }), { status: 200 });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     return new Response(JSON.stringify({ success: false, message: "Email sending failed" }), { status: 500 });
//   }
// }




import nodemailer from "nodemailer";

// Define the POST handler function to accept form submissions. This name must be exact.
export async function POST(request) {
  try {
    // 1. Parse the incoming JSON body from the request.
    const body = await request.json();
    const { firstname, lastname, emailaddress, phonenumber, message } = body;

    // 2. Simple validation check: ensure all fields are present
    if (!emailaddress || !message || !firstname || !lastname || !phonenumber) {
      return new Response(JSON.stringify({ 
        success: false, 
        message: "Missing one or more required fields (name, email, phone, message)."
      }), {
        status: 400, // 400 Bad Request
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // 3. Nodemailer integration: Create a transporter and define mail options
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        // Use your sending email address
        user: "shashinjain81@gmail.com", 
        // Use your generated App Password here (important for security)
        pass: "mifyvlrszbtqscxc", 
      },
    });

    const mailOptions = {
      from: "shashinjain81@gmail.com",
      // The recipient of the inquiry (where the form data should be sent)
      to: "shashinjain8@gmail.com", 
      subject: `New Contact Inquiry from ${firstname} ${lastname}`,
      text: `
        First Name: ${firstname}
        Last Name: ${lastname}
        Email: ${emailaddress}
        Phone Number: ${phonenumber}
        Message: ${message}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // 4. Return successful response (200 OK)
    return new Response(JSON.stringify({
      success: true,
      message: "Email sent successfully! We will be in touch shortly.",
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    // Log the error details to the Vercel console for debugging
    console.error("Error handling POST request or sending email:", error);

    // 5. Return an error response (500 Internal Server Error)
    return new Response(JSON.stringify({
      success: false,
      message: "Internal Server Error. Failed to process form data or send email.",
      error: error.message
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}