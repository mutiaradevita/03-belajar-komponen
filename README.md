|  | Pemrograman Berbasis Framework 2024 |
|--|--|
| NIM |  2141720135 |
| Nama |  Mutiara Devita Eka Putri |
| Kelas | TI - 3A |

1. Ubah isi kode Home() sehingga dapat tampil seperti berikut dengan memanfaatkan komponen Profile() yang tadi sudah dibuat dari langkah 1 tersebut!
Capture hasilnya dan buatlah laporan di README.md. Jelaskan apa yang telah Anda pelajari dan bagaimana Anda solve error tersebut?
![alt text](image.png)
Pertama memodifikasi kode page.tsx sesuai kebutuhan, seperti menambahkan teks atau elemen lain di sekitar komponen Profile(). Selanjutnya pada saat dijalankan terdapat pesan error (Error: Invalid src prop (https://i.imgur.com/MK3eW3Am.jpg) on next/image, hostname "i.imgur.com" is not configured under images in your next.config.js
        See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host)
Pesan error tersebut muncul karena kita menggunakan komponen next/image dari Next.js untuk menampilkan gambar yang dihosting di i.imgur.com, namun hostname tersebut belum dikonfigurasi dalam file next.config.js, Sehingga dengan menambahkan i.imgur.com ke array domains, kita memberitahu Next.js bahwa gambar dari i.imgur.com valid dan boleh diproses.