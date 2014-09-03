Meteor.publish('admin_user', function(_id){
	return Users.isAdmin(this.userId) ? Users.find({_id: _id}) : this.ready();
});