import emailjs from "@/services/emailjs/emailjs";

export interface SendEmail {
  name: string;
  email: string;
  subject: string;
}

export async function sendEmail(data: SendEmail) {
  return await emailjs.send("default_service", "template_jgxkrpy", {
    to_name: "João",
    reply_to: data.email,
    from_name: data.name,
    message: data.subject,
  });
}
