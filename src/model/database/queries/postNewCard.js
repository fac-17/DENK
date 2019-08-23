const connection = require("../db_connection");

exports.postNewCard = (tarottitle, tarotdescription) => {
    return connection.query("INSERT INTO tarot_cards (tarot_heading, tarot_description, tarot_image) VALUES($1,$2,$3)",
        [tarottitle, tarotdescription, "<svg></svg>"]
    )
}

