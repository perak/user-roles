Meteor.publish("current_user_data", function () {
    return Meteor.users.find( { _id: this.userId }, { fields: {profile: 1 , roles: 1} } );
});