const { body } = require("express-validator")

const photoInsertValidation = () => {
    return [
        body("title")
        .not()
        .equals("undefined")
        .withMessage("O titulo é obrigatorio")
        .isString()
        .withMessage("o titulo é obrigatorio")
        .isLength({min : 3})
        .withMessage("o titulo precisa ter pelo menos 3 caracteres"),
        body("image").custom((value, {req}) => {
            if(!req.file) {
                throw new Error("A imagem é obrigatoria!")
            }
            return true;
        }),
    ];
};

const photoUpdateValidation = () => {
    return [
        body("title")
        .optional()
        .isString()
        .withMessage("o titulo é obrigatorio!")
        .isLength({ min: 3 })
        .withMessage(" o titulo deve ter no minimo 3 caracteres")
    ]
}

const commentValidation = () => {
    return [
        body("comment").isString().withMessage("o comentario é obrigatorio"),
    ];
};

module.exports = {
    photoInsertValidation,
    photoUpdateValidation,
    commentValidation,
}