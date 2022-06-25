// Write class below
class ShiftCipher {
    constructor(shift) {
        this._shift = shift;
    }

    encrypt (string) {
      let initial = string.toLowerCase();  
      let array = initial.split('');
      let codearr = [];
      let newarr = [];
      
      //creates array - converts original to UTF and shifts when needed
      for (let i=0;i<array.length;i++) {
        if (array[i].charCodeAt(0) >= 97 && array[i].charCodeAt(0) <= 122) {
            codearr.push(array[i].charCodeAt(0) + this._shift);
        } else {
            codearr.push(array[i].charCodeAt(0));
        }
      }
      
      //wrapping logic
      for (let m=0;m<codearr.length;m++) {
        if (codearr[m] > 122) {
            codearr[m] = codearr[m] - 26;
        }
      }

      //creates array - converts UTF back to string 
      for (let j=0;j<codearr.length;j++) {
        newarr[j] = String.fromCharCode(codearr[j]);
      }
      
      let finalstr = newarr.join('');
      return finalstr.toUpperCase();
    }

    decrypt (string) {
        let initial = string.toLowerCase();  
        let array = initial.split('');
        let codearr = [];
        let newarr = [];

        //creates array - converts original to UTF and shifts when needed
        for (let i=0;i<array.length;i++) {
          if (array[i].charCodeAt(0) >= 97 && array[i].charCodeAt(0) <= 122) {
              codearr.push(array[i].charCodeAt(0) - this._shift);
          } else {
              codearr.push(array[i].charCodeAt(0));
          }
        }
        
        //wrapping logic
        for (let m=0;m<codearr.length;m++) {
          if (codearr[m] < 97 && codearr[m] > 64 )  {
              codearr[m] = codearr[m] + 26;
          }
        }
  
        //creates array - converts UTF back to string 
        for (let j=0;j<codearr.length;j++) {
          newarr[j] = String.fromCharCode(codearr[j]);
        }
        
        let finalstr = newarr.join('');
        return finalstr;
      }
    }


const cipher = new ShiftCipher(2);
console.log(cipher.encrypt('I love to code!')); // returns 'K NQXG VQ EQFG!'
console.log(cipher.decrypt('K <3 OA RWRRA')); // returns 'i <3 my puppy'