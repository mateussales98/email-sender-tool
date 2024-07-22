const nodemailer = require('nodemailer')

let user
let pass
let to
let subject
let html

;async (user, pass, to, subject, html) => {
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
		console.log(test)
	} catch (error) {
		console.error(error)
	}
}
