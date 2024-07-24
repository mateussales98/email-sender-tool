require('dotenv').config()
const nodemailer = require('nodemailer')

let user = process.env.USER
let pass = process.env.PASS
let to = process.env.TO
let subject = process.env.SUBJECT
let html = `

`

async function send(user, pass, to, subject, html) {
	try {
		const transporter = nodemailer.createTransport({
			host: 'smtp.office365.com',
			port: 587,
			secure: false,
			auth: {
				user,
				pass,
			},
		})

		const mailOptions = { from: user, to, subject, html }

		let test = await transporter.sendMail(mailOptions)
		return test
	} catch (error) {
		console.error(error)
		return error
	}
}

send(user, pass, to, subject, html)
