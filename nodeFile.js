const fs = require('fs')

const files = fs.readdirSync('./public/img/photography/Travel')

files.forEach(file => {
  if (!file.endsWith('jpg')) return
  console.log('cwebp ' + file + ' -q 60 -o ' + file.replaceAll('.jpg', '.webp'))
})
