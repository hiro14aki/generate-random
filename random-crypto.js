const crypto = require("crypto")

console.log(process.argv[2])

const generate = (digits) => {
  const buff = crypto.randomBytes(4)
  const hex = buff.toString("hex")
  console.log(hex)
  
  return parseInt(hex, 16)
}

console.log(generate())
