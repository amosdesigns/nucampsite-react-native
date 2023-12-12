const { readFile } = require("fs").promises;
const { Firestore } = require("@google-cloud/firestore");

if (process.argv.length < 3) {
  console.error("Please include a path to a JSON file.");
  process.exit(1);
}

const db = new Firestore();

const writeToFirestore = (data) => {
  for (const collection in data) {
    data[collection].forEach((document) => {
      db.collection(`${collection}`)
        .add(document)
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch((e) => {
          console.error("Error adding document: ", e);
        });
    });
  }
};

const importJSON = async (jsonFileName) => {
  const fileContents = await readFile(jsonFileName, "utf-8");
  const data = JSON.parse(fileContents);

  try {
    writeToFirestore(data);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};

importJSON(process.argv[2]).catch((e) => console.error(e));
