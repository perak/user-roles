Meteor.publish("current_user_data", function () {
	return Meteor.users.find({ _id: this.userId }, {
		fields: {
			username: 1,
			profile: 1,
			private: 1,
			public: 1,
			roles: 1,
			emails: 1
		}
	});
});
