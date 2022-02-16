//cara membuat object pada javascript
//2. Object Menggunakan Function Deklaration
// keuntungan membuat object dengan function ini kalian ngak perlu buat duplikat dari object
//cukup buat object 1 nanti kalo mau pake lagi tinggal panggil

//buat template nya dulu
function Mahasiswa(nama, energi) {
  const mahasiswa = {};
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;

  mahasiswa.makan = function (porsi) {
    this.energi = this.energi + porsi; //atau bisa di tulis this.energi += porsi;
    console.log(`Halo ${this.nama}, selamat makan`);
  };
  //kita harus return
  return mahasiswa;
}

//sekarang baru kita buat object nya
const dewaangga = Mahasiswa('dewaangga', 99);
//kalo mau bikin mahasiswa berikutnya kita tinggal buat lagi object nya
const rantika = Mahasiswa('Rantika', 50);
