//cara membuat object pada javascript
//2. Object Menggunakan Versi class
// keuntungan membuat object dengan function ini kalian ngak perlu buat duplikat dari object
//cukup buat object 1 nanti kalo mau pake lagi tinggal panggil

//buat template nya dulu
class Mahasiswa {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }
  makan(porsi) {
    this.energi = this.energi + porsi;
    return `Halo ${this.nama}, selamat makan!`;
  }
  main(jam) {
    this.energi = this.energi - jam;
    return `Halo ${this.nama}, selamat bermain!`;
  }
  tidur(jam) {
    this.energi = this.energi + jam * 2;
    return `Halo ${this.nama}, selamat bermain!`;
  }
}

let dewaangga = new Mahasiswa('dewaangga', 50);
let rantika = new Mahasiswa('rantika', 50);
