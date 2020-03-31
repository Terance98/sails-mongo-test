const getHomePage = async (req, res) => {
    // Get access to the native MongoDB client via the default Sails datastore.
    var db = sails.getDatastore().manager;

    // Find all users who own albums with the word "blue" in the title.
    // ("albums" would be defined in `api/models/User.js` as an attribute of type "json".)
    db.collection('users').find().toArray(console.log);

    res.view('pages/homepage');
}

module.exports = { getHomePage };