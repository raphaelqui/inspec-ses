import AWS from 'aws-sdk';
require('dotenv').config();

const SES_CONFIG = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_SES_REGION,
};
const AWS_SES = new AWS.SES(SES_CONFIG);

interface interface_template {
    html: string,
    subject: string,
    source: string
}

export const sendEmail = async (recipientEmail: string[], template: interface_template ) => {

    // so als nächstes muss ich schauen ob und wie ich alex retten kann 
    // ich außerdem gibt auch das template-object an 

    let params = {
        Source: template.source,
        Destination: {
            ToAddresses: recipientEmail
        },
        ReplyToAddresses: [],
        Message: {
            Body: {
                Text: {
                    Charset: "UTF-8",
                    Data: ""
                },
                Html: {
                    Data: template.html
                },
            },
            Subject: {
                Charset: "UTF-8",
                Data: template.subject
            }
        }
    }
    try {
        const res = await AWS_SES.sendEmail(params).promise() as any;
        const body = await res.json();
        return new Response(JSON.stringify({
            service: {
                body: body,
                res: res,
                from: "success"
            },
        }));
    } catch(error){
        return new Response(JSON.stringify({
            service: error,
            from: "failure"
        }));
    }

}

