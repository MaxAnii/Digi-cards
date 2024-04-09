import { verificationEmailTemplate } from "./emailTemplate";
import { passwordResetEmailTemplate } from "./resetPasswordEmailTemplate";
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
	service: "SendinBlue",
	auth: {
		user: process.env.NODEMAILER_AUTH_USER,
		pass: process.env.NODEMAILER_AUTH_PASS,
	},
});

export const sendVerificatonEmail = async (email: string, token: string) => {
	const confrimLink = `https://digicards1.vercel.app/emailverification?token=${token}`;
	await transporter.sendMail({
		from: process.env.TRANSPORTER_FROM,
		to: email,
		subject: "Verify your email.",
		html: verificationEmailTemplate(confrimLink),
	});
};
export const sendResetEmail = async (email: string, token: string) => {
	const confrimLink = `https://digicards1.vercel.app/resetpassword?token=${token}`;
	await transporter.sendMail({
		from: process.env.TRANSPORTER_FROM,
		to: email,
		subject: "Verify your email.",
		html: passwordResetEmailTemplate(confrimLink),
	});
};
