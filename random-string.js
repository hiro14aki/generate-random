const { program } = require("commander");

program
  .option("-d, --digit <digit>", "generate digit")
  .option("-c, --count <count>", "generate count")
  .parse(process.argv);

if (program.rawArgs.length === 2) {
  program.help();
  exit;
}

const randomString = (len, charSet) => {
  charSet =
    charSet || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomString = "";
  for (let i = 0; i < len; i++) {
    const randomPoz = Math.floor(Math.random() * charSet.length);
    randomString += charSet.substring(randomPoz, randomPoz + 1);
  }
  return randomString;
};

for (i = 0; i < program.count; i++) {
  console.log(randomString(program.digit, "0123456789"));
}
