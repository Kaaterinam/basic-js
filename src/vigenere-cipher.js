const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  flag
  constructor(asd){
    this.flag = asd
  }

  vigenereEncrypt(message, key){

    if (!message || !key) {
      throw new Error("Incorrect arguments!");  // Ошибка с правильным сообщением
    }
    message=message.toUpperCase()
    key = key.toUpperCase()
    let result=''
    let keyIndex=0

    for (let i=0; i<message.length;i+=1){
      let char=message[i]
      if (/[A-Z]/.test(char)){
        let shift=key[keyIndex%key.length].charCodeAt(0)-"A".charCodeAt(0)
        let encryptCode = String.fromCharCode(((char.charCodeAt(0) - "A".charCodeAt(0) + shift) % 26) + "A".charCodeAt(0));

        result+=encryptCode
        keyIndex+=1
      } else{
        result+=char
      }
    }
    return result
  }
  encrypt(str1, str2) {
    if (!str1 || !str2) {
      throw new Error("Incorrect arguments!");  // Ошибка с правильным сообщением
    }
      const a=this.vigenereEncrypt(str1, str2)
    if (this.flag===false){
      return a.split('').reverse().join('');
    }
    return a
  }
  vigenereDecrypt(shifrText, key){
    if (!shifrText || !key) {
      throw new Error("Incorrect arguments!");  // Ошибка с правильным сообщением
    }
    let keyIndex=0
    key=key.toUpperCase()
    shifrText=shifrText.toUpperCase()
    let result=''
    for (let i=0; i<shifrText.length; i+=1){
      let char=shifrText[i]
      if (/[A-Z]/.test(char)){
        let shift=key[keyIndex%key.length].charCodeAt(0)-'A'.charCodeAt(0)
        let decrChar=String.fromCharCode(((char.charCodeAt(0)-'A'.charCodeAt(0)-shift+26)%26)+'A'.charCodeAt(0))
        result+=decrChar
        keyIndex+=1
      } else{
        result+=char
      }
    }
    return result
  }
  decrypt(str1, str2) {
    if (!str1 || !str2) {
      throw new Error("Incorrect arguments!");  // Ошибка с правильным сообщением
    }
    const a=this.vigenereDecrypt(str1,str2)
  if (this.flag===false){
    return a.split('').reverse().join('');

  }
  return a
  }
}

module.exports = {
  VigenereCipheringMachine
};
