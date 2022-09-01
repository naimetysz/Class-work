const negatifler = [];
const pozitifler = [];

const dizelereAyir = (n) => {
  for (let i = 0; i < n.length; i++) {
    if (n[i] < 0) {
      negatifler.push(n[i]);
    } else {
      pozitifler.push(n[i]);
    }
  }
};
dizelereAyir(dizi);
console.log(negatifler);
console.log(pozitifler);
console.log(dizi);


    
