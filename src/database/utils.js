const fs = require('fs');

const saveToDatabase = (DB, data) => {
    fs.writeFileSync("./src/database/db.json", JSON.stringify(DB, null, 2), 
    {encoding: 'utf-8'});
};

module.exports = {
    saveToDatabase
};