/**
 * Created by sanathshetty on 11/4/14.
 */

// check that the userId specified owns the documents
ownsDocument = function(userId, doc) {
    return doc && doc.userId === userId;
}