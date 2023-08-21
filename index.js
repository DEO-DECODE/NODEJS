const fs = require("fs");
const path = require("path");
const dirName = path.join(__dirname, "files");
// console.log(dirName);
for (i = 0; i < 5; ++i) {
  fs.writeFileSync(dirName + `/hello${i}.txt`, "A simple Test File");
}
fs.readdir(dirName, (err, files) => {
  files.forEach((item) => {
    console.log("File name is ", item);
  });
});
