const connection = require("../db_connection");

const getRandomCard = () => {
    return connection.query("select * from starot_cards ORDER BY RANDOM() limit 1")
    
}
module.exports = getRandomCard