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

var password = 'holmes@ABCDE' //silahkan isi dengan testcase/password
var checker = ''

for (var a = 0; a < password.length; a++) {
   if (password[a] == 'a') {
      checker += 'b'
   } else if (password[a] === '@') {
      checker += password[a]
   } else if (password[a] === '#') {
      checker += password[a]
   } else if (password[a] === '$') {
      checker += password[a]
   } else if (password[a] === '*') {
      checker += password[a]
   } else if (password[a] === 'i') {
      checker += 'j'
   } else if (password[a] === 'u') {
      checker += 'v'
   } else if (password[a] === 'e') {
      checker += 'f'
   } else if (password[a] === 'o') {
      checker += 'p'
   } else if (password[a] == 'b' || 'c' || 'd' || 'f' || 'g' || 'h' || 'j' || 'k' || 'l' || 'm' || 'n' || 'p' || 'q' || 'r' || 's' || 't' || 'v' || 'w' || 'x' || 'y' || 'z') {
      checker += '<'
   } else if (password[a] === '0') {
      checker += '1'
   } else if (password[a] === '1') {
      checker += '2'
   } else if (password[a] === '2') {
      checker += '3'
   } else if (password[a] === '3') {
      checker += '4'
   } else if (password[a] === '4') {
      checker += '5'
   } else if (password[a] === '5') {
      checker += '6'
   } else if (password[a] === '6') {
      checker += '7'
   } else if (password[a] === '7') {
      checker += '8'
   } else if (password[a] === '8') {
      checker += '9'
   } else if (password[a] === '9') {
      checker += '0'
   } else {
      checker += password[a]
   }
}

console.log(checker)
//Tulis program disini
