import { sendEmail } from '@/sendEmail';
import { NextRequest } from 'next/server';
require('dotenv').config();



export async function POST (req: NextRequest){

    const reqBody = await req.json();
    const { template } = require("@/templates/"+reqBody.template+".js");
    // :::reqBody.email muss type string[] sein::: 
    const res = await sendEmail(typeof reqBody.email === "string" ? [reqBody.email] : reqBody.email, template(reqBody.content, reqBody.localization));
    return new Response(JSON.stringify({
        templateObj: template(reqBody.content, reqBody.localization),
        recipient: reqBody.email
    }), {status: 200});

    /* 
    reqBody = {
        email: "quinto.raph9@gmail.com", 
        template: "the9th_pin_confirmation", 
        content: {                      
            name: "Raphael",
            pin: "chiffriert",
        }
        localization: "de"
    }
    */

}