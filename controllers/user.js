//test method
const userTest = (req, res) => {
    return res.status(200).send({
        message: "Message from User controller"
    })
}

module.exports = {
    userTest
}