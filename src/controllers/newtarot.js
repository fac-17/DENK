const postNewCard = require("../model/database/queries/postNewCard")

exports.newtarot = (req, res) => {
    res.render("newtarot")
}

exports.newtarotpost = (req, res) => {
    postNewCard.postNewCard(req.body["tarot-title"], req.body["tarot-description"])
        .then(result => {
            console.log({ result });
            res.render("newtarot");
        })
}

