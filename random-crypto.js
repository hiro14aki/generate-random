const { program } = require("commander")
const crypto = require("crypto")

program
  .option("-d, --digit <digit>", "generate digit")
  .parse(process.argv)

if (program.rawArgs.length === 2) {
  program.help();
  exit;
}

const generate = (digits) => {
  const buff = crypto.randomBytes(parseInt(digits))
  const hex = buff.toString("hex")
  console.log(hex)
  
  return parseInt(hex, 16)
}

console.log(generate(program.digit))
