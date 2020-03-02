/*
Tulislah Pseudocode untuk memecahkan kasus berikut:

Conan ingin mencari anggota sindikat mafia dari Sicilia. Sindikat tersebut memiliki berbagai macam pangkat anggota diantaranya:
-Don
-Underboss
-Capo

Untuk mengekspos grup ini, dia akan membuat program yang menganalisa ciri-ciri seseorang berdasarkan beberapa variabel.
Setelah menganalisa ciri-ciri tersebut,program akan mengeluarkan output apakah orang tersebut ciri-cirinya mirip dengan salah satu anggota sindikat mafia dengan pangkat yang disebutkan sebelumnya.
Program akan menerima input sebagai berikut:
-Nama (String)
-Umur (Number)
-Tempat Tinggal (String)
-Uang Tabungan dalam dollar (Number)
 
Berikut ini ciri-ciri dari masing-masing pangkat di dalam sindikat tersebut. Untuk dicurigai sebagai seorang anggota mafia yang memiliki [pangkat], orang tersebut harus memenuhi:

Don
-Biasanya berumur diatas 40 tahun
-Tinggal di Nevada, New York, atau Havana
-Tabungannya sudah dipastikan diatas 10 juta dollar

Underboss
-Biasanya berumur 25 - 40 tahun
-Tinggal di New Jersey, Manhattan, atau Nevada
-Tabungannya 1 juta dolar sampai 2 juta dolar tidak kurang tidak lebih

Capo
-Biasanya berumur 18 - 24 tahun
-Tinggal di California, Detroit, atau Boston
-Tabungannya < 1 juta dolar


Setelah menganalisa orang tersebut, program akan mengeluarkan output:
1. Jika dia adalah seorang anggota mafia yang memiliki [pangkat] (salah satu dari Don, Underboss, Capo)

'[Nama] kemungkinan adalah seorang anggota mafia dengan [pangkat].'

2. Jika orang tersebut tidak memenuhi syarat-syarat tersebut, maka program akan mengeluarkan output:

'[Nama] tidak mencurigakan.

*/

//Tulis Pseudocode/Algoritma disini

SET nama with 'Budi'
SET umur with 25
SET tempatTinggal with 'Manhattan'
SET tabungan with 1500000

IF umur >= 25 AND umur <= 40 AND tempatTinggal EQUAL TO 'New Jersey' or 'Manhattan' or 'Nevada' AND tabungan >= 1000000 AND tabungan <= 2000000 THEN
    PRINT nama PLUS 'kemungkinan adalah seorang anggota mafia dengan Underboss.'
ELSE IF umur >= 18 AND umur <= 24 AND tempatTinggal EQUAL TO 'California' or 'Detroit' or 'Boston' AND tabungan < 1000000 THEN
    PRINT nama PLUS 'kemungkinan adalah seorang anggota mafia dengan Capo.'
ELSE IF umur > 40 AND tempatTinggal EQUAL TO 'Havana' or 'New York' or 'Nevada' AND tabungan > 10000000 THEN
PRINT nama PLUS 'kemungkinan adalah seorang anggota mafia dengan Don.'
ELSE PRINT nama PLUS 'tidak mencurigakan.'
ENDIF