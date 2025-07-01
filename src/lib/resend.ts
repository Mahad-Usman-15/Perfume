"use server"
import { Resend } from 'resend';

const resend=new Resend(process.env.RESEND_API_KEY)
export default async function sendEmail(email:string){
    try{
        const data=resend.emails.send({
    from:'onboarding@resend.dev',
    to:'mahadusman2008@gmail.com',
    subject: 'Hello World',
    html:`<strong><p>${email}subscribed News Letter section </strong></p>`
})
 console.log(data)
 return { success: true };

    }


catch (error) {
        console.error("Error sending email:", error);
        return { success: false, error: "Failed to send message" };
    }

}