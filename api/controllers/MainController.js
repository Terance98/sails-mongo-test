const getHomePage = async (req, res) => {
    // Get access to the native MongoDB client via the default Sails datastore.
    var db = sails.getDatastore().manager;

    // Find all users who own albums with the word "blue" in the title.
    // ("albums" would be defined in `api/models/User.js` as an attribute of type "json".)
    db.collection('users').find().toArray(console.log);

    db.collection('product').insertOne(
        { item: "canvas", qty: 100, tags: ["cotton"], size: { h: 28, w: 35.5, uom: "cm" } }
    )

    res.view('pages/homepage');
}

module.exports = { getHomePage };