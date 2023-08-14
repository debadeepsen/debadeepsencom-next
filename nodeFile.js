const fs = require('fs')

const files = fs.readdirSync('./public/img/photography/Travel')

// console.log(files)

// const { exec } = require('child_process')

// exec('cd .\\public\\img\\photography\\Travel', (error, stdout, stderr) => {
//   console.log({ error, stdout, stderr })
// })

// exec('dir', (error, stdout, stderr) => {
//   console.log({ error, stdout, stderr })
// })

files.forEach(file => {
  if (!file.endsWith('jpg')) return
  console.log('cwebp ' + file + ' -q 60 -o ' + file.replaceAll('.jpg', '.webp'))
})
