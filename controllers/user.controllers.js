const Interact = require("./interact.js");

exports.addUser = async(req, res, next) => {
    const { firstName, lastName, cardId, birthDate, phoneNumber } = {...req.body };

    if (firstName != null && lastName != null && cardId != null && birthDate != null && phoneNumber != null) {
        try {
            const result = await Interact.createUser(firstName, lastName, cardId, birthDate, phoneNumber);
            if (result) {
                return res.status(200).json({ msg: "Utilisateur crée avec succès" });
            }
            return res.status(500).json({ msg: "Erreur de serveur" });
        } catch (e) {
            console.log(e);
            return res.status(500).json({ msg: "Erreur de serveur" });
        }

    }
    res.status(400).json({ msg: "Erreur de requête" });
}

exports.getUser = async(req, res, next) => {
    const cardId = req.body.cardId;

    if (cardId != null) {
        try {
            let user = await Interact.getUser(cardId);
            console.log(typeof user);
            console.log(user.cardId);
            if (user.fisrtName != "" && user.lastName != "" && user.cardId != "" && user.birthDate != "" && user.phoneNumber != "") {
                return res.status(200).json({ user: user });
            }
            return res.status(404).json({ msg: "L'utilisateur n'existe pas" });
        } catch (e) {
            console.log(e);
            return res.status(500).json({ msg: "Erreur de serveur" });
        }
    }
    return res.status(400).json({ msg: "Erreur de requête" });
}