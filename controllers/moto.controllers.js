const Interact = require("./interact.js");

exports.addMoto = async(req, res, next) => {
    const { cardId, chassId } = {...req.body };
    console.log(cardId);
    console.log(chassId);

    if ((cardId != "" || cardId != null) && (chassId != "" || chassId != null)) {
        try {
            const result = await Interact.addMoto(cardId, chassId);
            return res.status(200).json({ msg: "Moto ajouté avec succès" });
        } catch (e) {
            console.log(e);
            return res.status(500).json({ msg: "Erreur de serveur" });
        }
    } else {
        return res.status(400).json({ msg: "Mauvais requête" });
    }
}

exports.getMotoFromUser = async(req, res, next) => {
    const cardId = req.body.cardId;
    if (cardId != null) {
        try {
            const result = await Interact.getMotosFromUser(cardId);
            console.log(result);
            return res.status(200).json({ moto: result });
        } catch (e) {
            console.log(e);
            return res.status(500).json({ msg: "Erreur de serveur" });
        }
    } else {
        return res.status(400).json({ msg: "Mauvais requête" });
    }

}