import { verificationEmailTemplate } from "./emailTemplate";
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
	service: "SendinBlue",
	auth: {
		user: process.env.NODEMAILER_AUTH_USER,
		pass: process.env.NODEMAILER_AUTH_PASS,
	},
});

export const sendVerificatonEmail = async (email: string, token: string) => {
	const confrimLink = `http://localhost:3000/emailverification?token=${token}`;
	await transporter.sendMail({
		from: process.env.TRANSPORTER_FROM,
		to: email,
		subject: "Verify your email.",
		html: verificationEmailTemplate(confrimLink),
	});
};
export const sendResetEmail = async (email: string, token: string) => {
	const confrimLink = `http://localhost:3000/resetpassword?token=${token}`;
	await transporter.sendMail({
		from: process.env.TRANSPORTER_FROM,
		to: email,
		subject: "Verify your email.",
		html: verificationEmailTemplate(confrimLink),
	});
};
