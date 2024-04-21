//test method
const publicationTest = (req, res) => {
    return res.status(200).send({
        message: "Message from Publication controller"
    })
}

module.exports = {
    publicationTest
}