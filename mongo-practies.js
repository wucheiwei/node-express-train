require("dotenv").config();
const mongo = require("mongodb");
const client = new mongo.MongoClient(process.env.MONGODB_URI, {
    serverSelectionTimeoutMS: 5000,
});

async function main() {
    try {
        console.log("準備連線到 MongoDB...");
        await client.connect();
        console.log("連接成功");
    } catch (err) {
        console.error("連接失敗", err);
    } finally {
        await client.close();
        console.log("連線已關閉");
    }
}

main();