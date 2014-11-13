//this collection is “local” to the current user.
Errors = new Mongo.Collection(null);


throwError = function(message) {
    Errors.insert({message: message})
}