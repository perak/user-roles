Meteor.publish("admin_users", function() {
	return Users.isAdmin(this.userId) ? Meteor.users.find({}, {fields: {profile: 1, roles: 1, emails: 1}}) : this.ready();
});