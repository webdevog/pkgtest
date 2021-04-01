import sharp from 'sharp'

var inputBuffer = new Buffer("Simply Easy Learning", "utf-8");
const input = sharp(inputBuffer)

console.log('SUCCESS!')
process.exit(0)
