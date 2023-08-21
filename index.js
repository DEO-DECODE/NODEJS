const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "crud");
const filePath = `${dirPath}/apple.txt`;
// fs.writeFileSync(filePath, "This is a simple text file");
// fs.readFile(filePath, "utf8", (err, item) => {
//   console.log(item);
// });
// Updation
// fs.appendFile(filePath, "and file name is apple.txt", (err) => {
//   if (!err) console.log("File is Updated");
// });
// Rename
// fs.rename(filePath, `${dirPath}/fruit.txt`, (err) => {
//   if (!err) {
//     console.log("File name is Updated");
//   }
// });
// Deletion
fs.unlinkSync(`${dirPath}/fruit.txt`);
