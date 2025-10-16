import nodemailer from 'nodemailer';

export async function POST(req, res) {
  const { firstname, lastname, emailaddress, phonenumber, message } = await req.json();

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
      // user: "shashinjain81@gmail.com",
      // pass: "mify vlrs zbtq scxc",
    },
  });

  let mailOptions = {
    from: emailaddress,
    to: 'shashinjain81@gmail.com',
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

// import nodemailer from "nodemailer";

// export async function POST(req) {
//   try {
//     const { firstname, lastname, emailaddress, phonenumber, message } =
//       await req.json();

//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.GMAIL_USER,
//         pass: process.env.GMAIL_PASS,
//       },
//     });

//     const mailOptions = {
//       from: emailaddress,
//       to: "shashinjain81@gmail.com",
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

//     return new Response(
//       JSON.stringify({ status: "Ok", message: "Email sent successfully" }),
//       {
//         status: 200,
//         headers: { "Content-Type": "application/json" },
//       }
//     );
//   } catch (error) {
//     console.error("Error sending email:", error);
//     return new Response(
//       JSON.stringify({ status: "Error", message: error.message }),
//       {
//         status: 500,
//         headers: { "Content-Type": "application/json" },
//       }
//     );
//   }
// }
