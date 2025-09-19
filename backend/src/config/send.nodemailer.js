import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
})


export const sendEmail = async (email, subject, text, html) => {
    const info = await transporter.sendMail({
        from : process.env.EMAIL_USER,
        to : email,
        subject : subject,
        html : html,
        text : text
    })
}