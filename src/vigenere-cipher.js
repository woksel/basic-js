module.exports = class VigenereCipheringMachine {
  keywordTransform(message, key) {
    let keyStr = '';
    let k = 0;

    while (k < message.length) {
      for (let i = 0; i < key.length; i++) {
        if (k < message.length) {
          if (/[a-z]/i.test(message[k])) {
            keyStr += key[i].toUpperCase();
          } else { keyStr += message[k]; i--; }
          k++;
        } else break;
      }
    }
    return keyStr;
  }

  encrypt(message, key) {
    const res = [...message.toUpperCase()].reduce((acc, n, i) => {
      if ((/[a-z]/i).test(n)) {
        const keyStr = this.keywordTransform(message, key);
        const offset = keyStr[i].charCodeAt() - this.start;

        if (offset + n.charCodeAt() > this.end) {
          const d = (offset + n.charCodeAt()) - this.end - 1;
          return acc + String.fromCharCode(this.start + d);
        }
        return acc + String.fromCharCode(n.charCodeAt() + offset);
      }
      return acc + n;
    }, '').toUpperCase();
    return this.type ? res : [...res].reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    const res = [...encryptedMessage].reduce((acc, n, i) => {
      if ((/[a-z]/i).test(n)) {
        const keyStr = this.keywordTransform(encryptedMessage, key);
        const offset = keyStr[i].charCodeAt() - this.start;

        if (n.charCodeAt() - offset < this.start) {
          const d = this.start - (n.charCodeAt() - offset) - 1;
          return acc + String.fromCharCode(this.end - d);
        }
        return acc + String.fromCharCode(n.charCodeAt() - offset);
      }
      return acc + n;
    }, '');
    return this.type ? res : [...res].reverse().join('');
  }

  constructor(type) {
    this.type = true;
    if (type === false) this.type = false;

    this.start = 65;
    this.end = 90;
  }
};
