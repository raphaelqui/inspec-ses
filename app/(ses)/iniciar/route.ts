import { sendEmail } from '@/sendEmail';
import { decryptMsg, encryptMsg } from '@/functions/helper';

export async function POST (req: Request){



    // const iniciar = async () => {
    //     await fetch("/iniciar", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({
    //         some: "value",
    //         data: "value",
    //       }),
    //     });
    //   };

    // console.log('1/4 - Email-Senden-Prozess erfolgreich gestartet!');

    // Prozess dem richtigen Projekt zuordnen
    /* spannende Frage: Wie finde ich einen Weg durch den 
    Request-Parameter, die Email korrekt zuzuordnen, sodass ich
    das richtige Email-Template wähle!
    */
//    console.log('2/4 - Das richtige Email-Template wurde ausgewählt.');
   
   // entgegennehmen und die Email generieren lassen
//    console.log('3/4 - Die Email wurde mit korrektem Inhalt definiert.');
   
   // auf die Email warten und dann zur enviar Datei senden lassen
//    const enviado = await fetch("/enviar", {
//        method: 'POST',
//        headers: {
//            "Content-Type": "application/json"
//         }, 
//         body: JSON.stringify({
//             email: "quinto.raph9@gmail.com"
//         })
//     });
//     console.log('4/4 - Die Email wurde erfolgreich verschickt.');
    const pw = "I0wee1TaP0"
    const decryptedPin = encryptMsg("138199" ,pw);
    sendEmail("quinto.raph9@gmail.com", "Raphael Quinto Ehnold", decryptMsg(decryptedPin, pw));

    return new Response(JSON.stringify({
        msg: 'Die Email wurde erfolgreich verschickt!'
    }), {status: 200});
    
}