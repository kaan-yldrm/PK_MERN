let fs = require('fs');

/* fs.mkdir('./for_testing/newFolder', (err) => {
    if (err) throw err
    console.log('newFolder created')
})

// aynı isimde bir klasör var ise hata verir

fs.rmdir('./for_testing/newFolder', (err) => {
    if (err) throw err
    console.log('newFolder deleted')
})

// dosya siliyor rmDir ile
 */

if (!fs.existsSync('./for_testing/newFolder')) {
    // if newFolder doesnt exist: Create
    fs.mkdir('./for_testing/newFolder', (err) => {
        if (err) throw err
        console.log('newFolder created')
    })

}  else {
    // if folder does exist: Delete
    fs.rmdir('./for_testing/newFolder', (err) => {
        if (err) throw err
        console.log('newFolder deleted')
    })
}

// eğer klasör dosya içeriyorsa klasörü silmez

fs.unlink('./for_testing/text2.txt', (err) => {
    if (err) throw err
    console.log('File deleted')
})

// Dosya silme işlemi