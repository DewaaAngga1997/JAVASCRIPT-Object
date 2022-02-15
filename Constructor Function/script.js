//cara membuat object pada javascript
//2. Object Menggunakan Construction Function
//hampir mirip seperti function declaration

//buat template nya dulu
function Mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;

  this.makan = function (porsi) {
    this.energi = this.energi + porsi; //atau bisa di tulis this.energi += porsi;
    console.log(`Halo ${this.nama}, selamat makan`);
  };
}

let dewaangga = new Mahasiswa('dewaangga', 50);
