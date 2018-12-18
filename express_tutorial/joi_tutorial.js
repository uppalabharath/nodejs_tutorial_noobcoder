const JOI = require("joi");

const arrayString = ["banana", "apple", "orange"];

const userInput = {
    personalInfo: {
        name: "Me",
        email: "a123@a123.com",
        mobile: 954444444,
        address: {
            street: "abcd",
            city: "Hyderabad",
            zip: 501111
        }
    },
    favFruits: arrayString
};

const addressSchema = JOI.object().keys({
    street: JOI.string().trim().required(),
    city: JOI.string().trim().required(),
    zip: JOI.number().min(1000).max(999999).required()
});

const personalInfoSchema = JOI.object().keys({
    name: JOI.string().trim().max(32).required(),
    email: JOI.string().trim().email().required(),
    mobile: JOI.number().integer().positive(),
    address: addressSchema
});

const arraySchema = JOI.array().items(JOI.string());

const schema = JOI.object().keys({
    personalInfo: personalInfoSchema,
    favFruits: arraySchema
});

JOI.validate(userInput, schema, (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
});