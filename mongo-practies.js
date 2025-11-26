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
        let result = await collection.insertMany([
            {
                email: "aaa@aaa.com",
                password: 'aaa',
                level: 1
            },
            {
                email: "bbb@bbb.com",
                password: 'bbb',
                level: 2
            },
            {
                email: "ccc@ccc.com",
                password: 'ccc',
                level: 3
            }
        ]);
        console.log("資料已插入", result.insertedIds);
    } catch (err) {
        console.error("連接失敗", err);
    } finally {
        await client.close();
        console.log("連線已關閉");
    }
}

main();