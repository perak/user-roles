// If you want to modify the rights on user updates
// then add a new allow rule in your app.

Users.allow({
	// doesn't allow insert or removal of users from untrusted code
    update: function (userId, doc, fieldNames, modifier) {
        return Users.isAdmin(userId) 
        		// only admins can update user roles via the client
        		|| (doc._id === userId && !_.contains(fieldNames, 'roles'));
    }
});