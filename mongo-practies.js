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
        let db = client.db("last");
        let collection = db.collection("user");
        let result = await collection.updateMany({
            level: 1
        }, {
            $unset: {
                role: 'reader',
            }
        });
        console.log("符合資料的比數",result.matchedCount);
        console.log("資料已更新", result.modifiedCount);
    } catch (err) {
        console.error("連接失敗", err);
    } finally {
        await client.close();
        console.log("連線已關閉");
    }
}

main();