/**
 ==================
 Password Encryptor
 ==================

 Implementasikan program password Encryptor, yang akan mengamankan password kalian agar tidak mudah ditebak oleh orang-orang.
 Password encryptor akan mengambil input berupa sebuah string password, dan menukar masing-masing karakter di dalam string tersebut dengan
 karakter yang lain dengan aturan:

 1. vokal (a, i, u, e, o) akan diubah menjadi huruf berikutnya
 2. konsonan (huruf selain vokal) atau Huruf Uppercase akan diubah menjadi '<'
 3. angka (0-9) akan diubah menjadi angka disebelahnya, namun jika angka tersebut adalah angka 9, maka ubahlah angka tersebut menjadi 0
 4. karakter-karakter spesial '@', '#', '$', '*' akan dibiarkan saja
 
BATASAN INPUT:
- Untuk karakter-karakter spesial yang ada pada keyboard: hanya akan ada 4 macam yang perlu kalian handle, yaitu:
    -@
    -# 
    -$
    -*

Contoh:
1. Input:  'password21'
   Output: '<b<<<p<<32'

2. Input: '#####'
   Output: '#####'

3. Input: 'holmes@ABCDE'
   Output: '<p<<f<@<<<<<'

3. Input: '9thelegend'
   Output: '0<<f<f<f<<'

Rules:
- Boleh menambahkan variabel jika diperlukan
- Dilarang menggunakan built-in function kecuali untuk konversi Number to String dan sebaliknya [ contoh: Number(), parseInt(), String() ]  dan 
  pengecekan karakter tersebut adalah angka atau karakter [ contoh: isNaN(), isInteger() ]
 
 */

var password = '12awd@' //silahkan isi dengan testcase/password
var encrypted = '' 


//Tulis program disini
for (var a = 0; a < password.length; a++) {
      if (password[a] == (1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9)){
         encrypted += 
      }
}
