
import { decryptMsg } from '@/functions/helper';
 const template = ({name, pinChiffre}, localization)=>{
    let resObj = {}
    resObj.source = "info@inspec-ses.com"; // später the9th.co etc.
    resObj.subject = "Pin Bestätigung";
    resObj.html =  `<!DOCTYPE html>
    <html lang="en" xmlns:v="urn:schemas-microsoft-com:vml">
    <head>
      <meta charset="utf-8">
      <meta name="x-apple-disable-message-reformatting">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no">
      <meta name="color-scheme" content="light dark">
      <meta name="supported-color-schemes" content="light dark">
      <!--[if mso]>
      <noscript>
        <xml>
          <o:OfficeDocumentSettings xmlns:o="urn:schemas-microsoft-com:office:office">
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml>
      </noscript>
      <style>
        td,th,div,p,a,h1,h2,h3,h4,h5,h6 {font-family: "Segoe UI", sans-serif; mso-line-height-rule: exactly;}
      </style>
      <![endif]-->
      <title>Confirm your email address</title>
      <style>
        img {
          max-width: 100%;
          vertical-align: middle;
          line-height: 1
        }
        .hover-important-text-decoration-underline:hover {
          text-decoration: underline !important
        }
        @media (max-width: 600px) {
          .sm-my-8 {
            margin-top: 32px !important;
            margin-bottom: 32px !important
          }
          .sm-px-4 {
            padding-left: 16px !important;
            padding-right: 16px !important
          }
          .sm-px-6 {
            padding-left: 24px !important;
            padding-right: 24px !important
          }
          .sm-leading-8 {
            line-height: 32px !important
          }
        }
      </style>
    </head>
    <body style="margin: 0; width: 100%; background-color: #f8fafc; padding: 0; -webkit-font-smoothing: antialiased; word-break: break-word">
      <div style="display: none">
        Please confirm your email address in order to activate your account.
        &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847; &#8199;&#65279;&#847;
      </div>
      <div role="article" aria-roledescription="email" aria-label="Confirm your email address" lang="en">
        <div class="sm-px-4" style="background-color: #f8fafc; font-family: ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif">
          <table align="center" cellpadding="0" cellspacing="0" role="none">
            <tr>
              <td style="width: 552px; max-width: 100%">
                <table class="sm-my-8" style="margin-top: 48px; margin-bottom: 48px; width: 100%; text-align: center" cellpadding="0" cellspacing="0" role="none">
                  <tr>
                    <td> </td>
                  </tr>
                </table>
                <table style="width: 100%;" cellpadding="0" cellspacing="0" role="none">
                  <tr>
                    <td class="sm-px-6" style="border-radius: 4px; background-color: #fff; padding: 48px; font-size: 16px; color: #334155; box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05)">
                      <h1 class="sm-leading-8" style="margin: 0 0 24px; font-size: 24px; font-weight: 600; color: #000">
                        Hallo, ${name}
                      </h1>
                      <p style="margin: 0; line-height: 24px">
                        Anbei schicken wir deinen Pin damit du dich authentifizieren kannst.
                        <br>
                      </p>
                      <table style="width: 100%; padding-bottom: 24px; padding-top: 40px" cellpadding="0" cellspacing="0" role="none">
                        <tr>
                          <td style="text-align: center;">
                            <h1 style="margin: 0; color: #475569">${decryptMsg(pinChiffre, process.env.THE9TH_SYMMETRICAL_CRYPTKEY).split("").join(" ")}</h1>
                          </td>
                        </tr>
                      </table>
                      <p>
                        <br>
                        Wechsle wieder in den Login-Tab oder klicke auf den folgenden Link, um zurückzukehren und den Sicherheits-Code einzutippen.
                      </p>
                      <a href="www.google.com" style="color: #334155;">zurück zur Pin-Eingabe</a>
                      <div role="separator" style="background-color: #e2e8f0; height: 1px; line-height: 1px; margin: 32px 0">&zwj;</div>
                      <p style="margin: 0;">
                        Falls du dich nicht versucht hast bei THE9TH einzuloggen, dann ignoriere diese Email einfach. <br>
                        <br>
                        Danke, <br>Das THE9TH Team
                      </p>
                    </td>
                  </tr>
                  <tr role="separator">
                    <td style="line-height: 48px">&zwj;</td>
                  </tr>
                  <tr>
                    <td style="padding-left: 24px; padding-right: 24px; text-align: center; font-size: 12px; color: #475569">
                      <p style="margin: 0 0 16px; text-transform: uppercase">
                        THE9TH GmbH
                      </p>
                      <p style="margin: 0; font-style: italic">
                        We do freelancing, startups, networking, and above all coworking
                      </p>
                      <p style="cursor: default">
                        <a href="https://maizzle.com/docs/" class="hover-important-text-decoration-underline" style="color: #0f172a; text-decoration: none">Facebook</a>
                        &bull;
                        <a href="https://github.com/maizzle" class="hover-important-text-decoration-underline" style="color: #0f172a; text-decoration: none;">Instagram</a>
                        &bull;
                        <a href="https://twitter.com/maizzlejs" class="hover-important-text-decoration-underline" style="color: #0f172a; text-decoration: none;">Github</a>
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </body>
    </html>`;
    return resObj;
    }

    module.exports = {template};