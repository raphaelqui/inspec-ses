import {transactional} from '@/templates/transactional';
import AWS from 'aws-sdk';
require('dotenv').config();


const SES_CONFIG = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_SES_REGION,
};

const AWS_SES = new AWS.SES(SES_CONFIG);

export const sendEmail = async (recipientEmail: string, name: string, pin: string) => {
    /* Die Domain Übergabe, wenn die komplette Applikation fertig ist, soll
    doch bitte nahtlos verlaufen, also wenn ich Zugriff aufs Cedrics
    Domain-Anbieter Strato und die CNAME-Einträge von AWS hinein einfügen kann,
    brauch ich den introspective-ses.org/sendAuth Mechanismus nicht nocheinmal 
    umzuändern, sondern ich kann lediglich einfach Parameter übergeben 
    welche den Email-Sende-Prozess genau definieren, wie dieser verlaufen soll.

    https://music.youtube.com/watch?v=BAfNGQsLFKg -> from 31:10


    la prochaine choses:
    - einen Ordner nur für die Projekt Templates anfertigen


        - ein the9th-template anfertigen für die Pin Darstellung

        - das Entwickeln des Html-Codes beginnt mit einem Email-Template-Code



    - diesen Prozess durch den Dashboard-Button-Prozess testen.

    - als nächstes werden wir versuchen 



    - senden testen
    - service auf vercel deployen 
    - während der Authentifizierung mittels der introspective-ses app die Pin versenden
    


    - - -
    PARAMETERS
    - - -


    ==== SOURCE ==== Master

    Wenn ich also schon dabei bin den Absender genau zu definieren. Werde ich der
    Absender-Definition einen ganzen größeren Parameter widmen:
    
    const source = {
        compartment: "info"
        subdomain: "" --> ist subdomain ein leerer String, gilt nur hauptdomain
        //oder
        subdomain: "auth" --> folgendes gilt: auth.mydomain.com
        domain: "the9th.co" --> ja die TLD ist .co und steht für community, aber meint eigentlich colombia as counrty code 
    }

    ! für diese Angabe wird natürlich zuerst überprüft ob auch die domain von
    ! AWS verifiziert wurde. 



    ==== BODY ====

    Zudem möchte ich HTML-Code als String mitgeben in welcher wir die Daten mitübergen, 
    da ist jetzt direkt die.


    const body = "<html>
        <div style="style:value">
            some text
        </div>
    </html>"

    ! In der Body-Eigenschaft geben sowohl eine HTML- und Text-Eigenschaft. Hat der Nutzer eine
    ! high-latency.








    /



    


    





hier müssen wir den Pin entschlüsseln

      */ 

    let params = {
        Source: "info@inspec-ses.com",
        Destination: {
            ToAddresses: [
                recipientEmail
            ]
        },
        ReplyToAddresses: [],
        Message: {
            Body: {
                Text: {
                    Charset: "UTF-8",
                    Data: "Irgendein Titel"
                },
                Html: {
                    Data: transactional(name, pin)
                },
            },
            Subject: {
                Charset: "UTF-8",
                Data: `Hello, ${name}`
            }
        }
    }
    try {
        const res = await AWS_SES.sendEmail(params).promise();
        console.log('- - - - - - - - - - - - - - - - - - - - -');
        console.log('- - - - - - - - - - - - - - - - - - - - -');
        console.log('- - - - - - - -  resolved   - - - - - - -');
        console.log('- - - - - - - - - - - - - - - - - - - - -');
        console.log('- - - - - - - - - - - - - - - - - - - - -');
        console.log("Email has been sent!", res);
    } catch(error){
        console.log('- - - - - - - - - - - - - - - - - - - - -');
        console.log('- - - - - - - - - - - - - - - - - - - - -');
        console.log('- - - - - - - -   error   - - - - - - - -');
        console.log('- - - - - - - - - - - - - - - - - - - - -');
        console.log('- - - - - - - - - - - - - - - - - - - - -');
        console.error(error);
    }

}

