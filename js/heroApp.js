const privateKey = "72f67d282039de3a45cf0065ce6ddfc85ae0bbe7";
const publicKey = "aef76933547e2b635b4b4708c967358f";
const timeStamp = Date.now().toString();

//Criptografia MD5 - Obrigatório!! 
function createHash(timeStamp) {

    const toBeHashed = timeStamp + privateKey + publicKey;
    const hashedMessage = md5(toBeHashed);
    return hashedMessage;

}
