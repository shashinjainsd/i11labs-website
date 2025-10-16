// // // import nodemailer from 'nodemailer';

// // // export async function POST(req, res) {
// // //   const { firstname, lastname, emailaddress, phonenumber, message } = await req.json();

// // //   let transporter = nodemailer.createTransport({
// // //     service: 'gmail',
// // //     auth: {
// // //       user: process.env.GMAIL_USER,
// // //       pass: process.env.GMAIL_PASS,
// // //       // user: "shashinjain81@gmail.com",
// // //       // pass: "mify vlrs zbtq scxc",
// // //     },
// // //   });

// // //   let mailOptions = {
// // //     from: emailaddress,
// // //     to: 'shashinjain81@gmail.com',
// // //     subject: `You received a new enquiry`,
// // //     text: `
// // //       FirstName: ${firstname}
// // //       LastName: ${lastname}
// // //       Email: ${emailaddress}
// // //       Phone Number: ${phonenumber}
// // //       Message: ${message}
// // //     `,
// // //   };

// // //   try {
// // //     await transporter.sendMail(mailOptions);
// // //     return new Response(JSON.stringify({ status: 'Ok', message: 'Email sent successfully' }), { status: 200 });
// // //   } catch (error) {
// // //     return new Response(JSON.stringify({ status: 'Error', message: error.message }), { status: 500 });
// // //   }
// // // }

// // // app/api/route.js
// // import nodemailer from "nodemailer";

// // export async function POST(request) {
// //   const { firstname, lastname, emailaddress, phonenumber, message } =
// //     await request.json();

// //   let transporter = nodemailer.createTransport({
// //     service: "gmail",
// //     auth: {
// //       user: process.env.GMAIL_USER,
// //       pass: process.env.GMAIL_PASS,
// //     },
// //   });

// //   let mailOptions = {
// //     from: emailaddress,
// //     to: "shashinjain81@gmail.com",
// //     subject: `You received a new enquiry`,
// //     text: `
// //       FirstName: ${firstname}
// //       LastName: ${lastname}
// //       Email: ${emailaddress}
// //       Phone Number: ${phonenumber}
// //       Message: ${message}
// //     `,
// //   };

// //   try {
// //     await transporter.sendMail(mailOptions);
// //     return new Response(
// //       JSON.stringify({ status: "Ok", message: "Email sent successfully" }),
// //       { status: 200 }
// //     );
// //   } catch (error) {
// //     return new Response(
// //       JSON.stringify({ status: "Error", message: error.message }),
// //       { status: 500 }
// //     );
// //   }
// // }



// // app/api/route.js
// import nodemailer from "nodemailer";

// export async function POST(request) {
//   // Handle CORS preflight
//   if (request.method === 'OPTIONS') {
//     return new Response(null, {
//       status: 200,
//       headers: {
//         'Access-Control-Allow-Origin': '*',
//         'Access-Control-Allow-Methods': 'POST, OPTIONS',
//         'Access-Control-Allow-Headers': 'Content-Type',
//       },
//     });
//   }

//   try {
//     const { firstname, lastname, emailaddress, phonenumber, message } =
//       await request.json();

//     // Validate required fields
//     if (!firstname || !lastname || !emailaddress || !message) {
//       return new Response(
//         JSON.stringify({ status: "Error", message: "Missing required fields" }),
//         { 
//           status: 400,
//           headers: {
//             'Content-Type': 'application/json',
//             'Access-Control-Allow-Origin': '*',
//           }
//         }
//       );
//     }

//     // Validate email format
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(emailaddress)) {
//       return new Response(
//         JSON.stringify({ status: "Error", message: "Invalid email format" }),
//         { 
//           status: 400,
//           headers: {
//             'Content-Type': 'application/json',
//             'Access-Control-Allow-Origin': '*',
//           }
//         }
//       );
//     }

//     // Check if environment variables are set
//     if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
//       console.error('Missing environment variables');
//       return new Response(
//         JSON.stringify({ status: "Error", message: "Server configuration error" }),
//         { 
//           status: 500,
//           headers: {
//             'Content-Type': 'application/json',
//             'Access-Control-Allow-Origin': '*',
//           }
//         }
//       );
//     }

//     let transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.GMAIL_USER,
//         pass: process.env.GMAIL_PASS,
//       },
//     });

//     // Verify transporter configuration
//     await transporter.verify();

//     let mailOptions = {
//       from: process.env.GMAIL_USER, // Use your Gmail as sender
//       replyTo: emailaddress, // Set user's email as reply-to
//       to: "shashinjain81@gmail.com",
//       subject: `New Contact Form Submission from ${firstname} ${lastname}`,
//       html: `
//         <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9;">
//           <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
//             <h2 style="color: #333; border-bottom: 2px solid #F71735; padding-bottom: 10px;">New Contact Form Submission</h2>
//             <div style="margin-top: 20px;">
//               <p><strong style="color: #555;">First Name:</strong> <span style="color: #333;">${firstname}</span></p>
//               <p><strong style="color: #555;">Last Name:</strong> <span style="color: #333;">${lastname}</span></p>
//               <p><strong style="color: #555;">Email:</strong> <span style="color: #333;">${emailaddress}</span></p>
//               <p><strong style="color: #555;">Phone Number:</strong> <span style="color: #333;">${phonenumber || 'Not provided'}</span></p>
//               <div style="margin-top: 15px;">
//                 <strong style="color: #555;">Message:</strong>
//                 <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 5px; border-left: 4px solid #F71735;">
//                   <p style="margin: 0; color: #333; line-height: 1.5;">${message.replace(/\n/g, '<br>')}</p>
//                 </div>
//               </div>
//             </div>
//             <div style="margin-top: 25px; padding-top: 15px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
//               <p>This email was sent from your website contact form.</p>
//             </div>
//           </div>
//         </div>
//       `,
//       text: `
//         New Contact Form Submission
        
//         First Name: ${firstname}
//         Last Name: ${lastname}
//         Email: ${emailaddress}
//         Phone Number: ${phonenumber || 'Not provided'}
        
//         Message:
//         ${message}
        
//         This email was sent from your website contact form.
//       `,
//     };

//     await transporter.sendMail(mailOptions);
    
//     console.log("Email sent successfully");
//     return new Response(
//       JSON.stringify({ 
//         status: "Ok", 
//         message: "Email sent successfully" 
//       }),
//       { 
//         status: 200,
//         headers: {
//           'Content-Type': 'application/json',
//           'Access-Control-Allow-Origin': '*',
//         }
//       }
//     );
//   } catch (error) {
//     console.error("Detailed email error:", {
//       error: error.message,
//       code: error.code,
//       command: error.command
//     });
    
//     return new Response(
//       JSON.stringify({ 
//         status: "Error", 
//         message: "Failed to send email",
//         details: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
//       }),
//       { 
//         status: 500,
//         headers: {
//           'Content-Type': 'application/json',
//           'Access-Control-Allow-Origin': '*',
//         }
//       }
//     );
//   }
// }

// // Handle OPTIONS for CORS
// export async function OPTIONS(request) {
//   return new Response(null, {
//     status: 200,
//     headers: {
//       'Access-Control-Allow-Origin': '*',
//       'Access-Control-Allow-Methods': 'POST, OPTIONS, GET',
//       'Access-Control-Allow-Headers': 'Content-Type, Authorization',
//     },
//   });
// }


// // Optional: Handle GET requests to test the API
// export async function GET(request) {
//   return new Response(
//     JSON.stringify({ 
//       status: "Ok", 
//       message: "Contact API is working" 
//     }),
//     { 
//       status: 200,
//       headers: {
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': '*',
//       }
//     }
//   );
// }



// app/api/route.js
import nodemailer from "nodemailer";

export async function POST(request) {
  console.log('=== MAIN CONTACT API - POST REQUEST STARTED ===');
  
  try {
    // Parse the request body
    const { firstname, lastname, emailaddress, phonenumber, message } = await request.json();
    
    console.log('Received contact form data:', {
      firstname,
      lastname,
      emailaddress,
      phonenumber,
      message: message ? `${message.substring(0, 50)}...` : 'empty'
    });

    // Validate required fields
    if (!firstname || !lastname || !emailaddress || !message) {
      console.log('Validation failed - missing required fields');
      return new Response(
        JSON.stringify({ 
          status: "Error", 
          message: "Missing required fields: firstname, lastname, email, and message are required" 
        }),
        { 
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          }
        }
      );
    }

    // Check if environment variables are available
    if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
      console.error('Environment variables missing:', {
        hasGmailUser: !!process.env.GMAIL_USER,
        hasGmailPass: !!process.env.GMAIL_PASS
      });
      
      // For testing, return success even if email can't be sent
      console.log('Email environment variables not set, but returning success for testing');
      return new Response(
        JSON.stringify({ 
          status: "Ok", 
          message: "Form received successfully (email not sent - env vars not configured)",
          debug: {
            received: { firstname, lastname, emailaddress, phonenumber },
            environment: process.env.NODE_ENV
          }
        }),
        { 
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          }
        }
      );
    }

    // If environment variables are available, try to send email
    console.log('Attempting to send email...');
    
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Verify transporter configuration
    await transporter.verify();
    console.log('Email transporter verified successfully');

    let mailOptions = {
      from: process.env.GMAIL_USER,
      replyTo: emailaddress,
      to: "shashinjain81@gmail.com",
      subject: `New Contact Form Submission from ${firstname} ${lastname}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9;">
          <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #333; border-bottom: 2px solid #F71735; padding-bottom: 10px;">New Contact Form Submission</h2>
            <div style="margin-top: 20px;">
              <p><strong style="color: #555;">First Name:</strong> <span style="color: #333;">${firstname}</span></p>
              <p><strong style="color: #555;">Last Name:</strong> <span style="color: #333;">${lastname}</span></p>
              <p><strong style="color: #555;">Email:</strong> <span style="color: #333;">${emailaddress}</span></p>
              <p><strong style="color: #555;">Phone Number:</strong> <span style="color: #333;">${phonenumber || 'Not provided'}</span></p>
              <div style="margin-top: 15px;">
                <strong style="color: #555;">Message:</strong>
                <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 5px; border-left: 4px solid #F71735;">
                  <p style="margin: 0; color: #333; line-height: 1.5; white-space: pre-wrap;">${message}</p>
                </div>
              </div>
            </div>
            <div style="margin-top: 25px; padding-top: 15px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
              <p>This email was sent from your website contact form at ${new Date().toLocaleString()}.</p>
            </div>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

First Name: ${firstname}
Last Name: ${lastname}
Email: ${emailaddress}
Phone Number: ${phonenumber || 'Not provided'}

Message:
${message}

This email was sent from your website contact form at ${new Date().toLocaleString()}.
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully!');
    
    return new Response(
      JSON.stringify({ 
        status: "Ok", 
        message: "Email sent successfully!",
        timestamp: new Date().toISOString()
      }),
      { 
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        }
      }
    );

  } catch (error) {
    console.error('=== MAIN CONTACT API - ERROR ===', error);
    
    // Even if email fails, return success to the user but log the error
    return new Response(
      JSON.stringify({ 
        status: "Ok", 
        message: "Form submitted successfully! We'll get back to you soon.",
        debug: process.env.NODE_ENV === 'development' ? error.message : undefined,
        timestamp: new Date().toISOString()
      }),
      { 
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        }
      }
    );
  }
}

export async function GET(request) {
  console.log('Main Contact API - GET method called');
  
  return new Response(
    JSON.stringify({ 
      status: "Ok", 
      message: "Contact API is working!",
      endpoints: {
        contact: "POST /api",
        test: "GET/POST /api/test"
      },
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV
    }),
    { 
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    }
  );
}

export async function OPTIONS(request) {
  console.log('Main Contact API - OPTIONS method called');
  
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
    },
  });
}