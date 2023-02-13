let fs = require('fs')

let readStream = fs.createReadStream('./for_testing/text.txt', {encoding: 'utf-8'})
// UTF-8 ile text.txt dosyasının içeriğini UTF-8'e çevirir ve değişkene kaydeder.

let writeStream = fs.createWriteStream('./for_testing/newText')

readStream.pipe(writeStream);

// pipe "|" işlemi