import { sendEmail } from '@/sendEmail';
import { NextRequest } from 'next/server';
require('dotenv').config();



export async function POST (req: NextRequest){

    const reqBody = await req.json();
    const { template } = require("@/templates/"+reqBody.template+".js");
    return new Response(JSON.stringify({
        html: template(reqBody.content),
        recipient: reqBody.email
    }), {status: 200});

    /* 
    reqBody = {
        // email recipient
        email: "quinto.raph9@gmail.com", 
        // template filename
        template: "the9th_pin_confirmation", 
        // content for the template
        content: {                      
            name: "Raphael",
            pin: "chiffriert",
        }
    }
    */

}