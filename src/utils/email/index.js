import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    secure: false,
    auth: {
        user: "901b02e7ef8424",
        pass: "a694c7ac2c4ce4"
    }
});

// async..await is not allowed in global scope, must use a wrapper
async function main(req, res) {
    // send mail with defined transport object
    const info = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    });

    res.json({
        message: "Email has been sent",
        info
    })
}
export { transporter }
export { main }
