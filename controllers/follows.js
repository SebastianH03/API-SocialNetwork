//test method
const followTest = (req, res) => {
    return res.status(200).send({
        message: "Message from Follow controller"
    })
}

module.exports = {
    followTest
}