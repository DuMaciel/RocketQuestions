const Database = require("./config")

const initDb = {
    async init() {

        const db = await Database()

        await db.exec(`
        CREATE TABLE rooms (
            id_room INTEGER PRIMARY KEY,
            pass TEXT,
            create_date DATETIME
        );`)

        await db.exec(`
        CREATE TABLE questions (
            id_question INTEGER PRIMARY KEY AUTOINCREMENT,
            id_room INTEGER,
            title TEXT,
            read INTEGER
        );`)

        await db.close()
    }
}

initDb.init();