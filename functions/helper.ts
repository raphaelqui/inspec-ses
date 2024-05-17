import * as CryptoJS from 'crypto-js';

export const encryptMsg = (plaintext: string, passphrase: string)=>{
    return CryptoJS.AES.encrypt(plaintext, passphrase).toString();
}

export const decryptMsg = (ciphertext: string, passphrase: string)=>{
    const bytes = CryptoJS.AES.decrypt(ciphertext, passphrase);
    const decryptedText = bytes.toString(CryptoJS.enc.Utf8);
    return decryptedText;	
}

