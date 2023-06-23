const fs = require("fs");
const process = require("process");

function cat(path) {
  fs.readFile(path, "utf8", function (err, data) {
    if (err) {
      console.Log(err);
      process.exit(1);
    } else {
      console.log("YESSSS!!!", data);
    }
  });
}

async function webCat(url) {
  try {
    const resp = await axios.get(URL);
    console.log(resp.data);
  } catch (err) {
    console.log("Error", err);
    process.exit(1);
  }
}

let path = process.argv[2];
if (path.slice(0, 4) === "http") {
  webCat(path);
} else {
  cat(path);
}
