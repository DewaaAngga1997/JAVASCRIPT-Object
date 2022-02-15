//cara membuat object pada javascript

//1. Object Literal
//PROBLEM tidak efektif digunakan jika object nya banyak

let mahasiswa1 = {
  nama: 'Dewa Angga',
  energi: 10,
  //selanjutnya membuat method (funcion di dalam object)
  makan: function (porsi) {
    this.energi = this.energi + porsi;
    console.log(`Halo ${this.nama}, Selamat Makan`);
  },
};

//dan jika kita mau membuat object mahasiswa yang ke2
//kalo pake object literal kita harus buat object lagi sama seperti di atas
//tapi masalah nya nama object ngak boleh sama harus berbeda agar tidak error
//contoh buat object yang ke dua

let mahasiswa2 = {
  nama: 'Rantika',
  energi: 20,
  //selanjutnya membuat method (funcion di dalam object)
  makan: function (porsi) {
    this.energi = this.energi + porsi;
    console.log(`Halo ${this.nama}, Selamat Makan`);
  },
};
