import mailgen from "mailgen";
import nodemailer from "nodemailer";

const sendEmail = async (options) => {
    const transporter = nodemailer.createTransport({
    host: process.env.MAILTRAP_SMTP_HOST,
    port: Number(process.env.MAILTRAP_SMTP_PORT),
    auth: {
      user: process.env.MAILTRAP_SMTP_USER,
      pass: process.env.MAILTRAP_SMTP_PASS,
    },
  });

  const mailGenerator = new mailgen({
    theme: "default",
    product: {
      name: "ProjectCamp",
      link: "https://projectcamp.com/",
    },
  });
  
  const emailText = mailGenerator.generatePlaintext(options.mailgenContent);
  const emailHtml = mailGenerator.generate(options.mailgenContent);

  

  const mail = {
    from: '"ProjectCamp" <no-reply@projectcamp.com>',
    to: options.email,
    subject: options.subject,
    text: emailText,
    html: emailHtml,
  };

  try {
    await transporter.sendMail(mail);
  } catch (error) {
    console.log(
      "Email service Failed Silently, make sure that you have provided your mailtrap credentials correctly",
    );
    console.log("Error", error);
  }
};

const mailVerificationContent = (userName, verifyLink) => {
  return {
    body: {
      name: userName,
      intro: "Welcome to ProjectCamp! We're very excited to have you on board.",
      action: {
        instructions: "To get started with your account, please click here:",
        button: {
          color: "#22BC66", // Optional action button color
          text: "Verify your email",
          link: verifyLink,
        },
      },
      outro: {
        text: "If you did not create an account, no further action is required on your part.",
      },
    },
  };
};
const forgotPasswordContent = (userName, resetLink) => {
  return {
    body: {
      name: userName,
      intro: "You have requested to reset your password.",
      action: {
        instructions: "To reset your password, please click here:",
        button: {
          color: "#22BC66", // Optional action button color
          text: "Reset your password",
          link: resetLink,
        },
      },
      outro: {
        text: "If you did not request a password reset, no further action is required on your part.Need help? Just reply to this email, we'd love to assist you.",
      },
    },
  };
};
export { mailVerificationContent, forgotPasswordContent, sendEmail };
