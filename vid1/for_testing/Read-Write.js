let fs = require('fs');

/* import { readFile } from 'fs';
 Bu şekilde de sadece readFile komutunu kullanırsın 
*/ 

fs.readFile('./for_testing/text.txt', (err, data) => {
    if (err) throw err
    console.log(data.toString());
})
    // dosya yolunu tamamen yazman lazım yoksa hata (err) verir.

    // doğru olduğunda buffer olarak veriyi çıktı verir


fs.writeFile('./for_testing/text2.txt', 'This is a new text', (err) => {
    if (err) throw err
    console.log('write is successful');
})

    // text2.txt dosyasına yazma/yaratma işlemi