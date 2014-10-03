// Looking nasty but used by meteor-kitchen
Meteor.publish("users_null", function () {
    return Meteor.users.find({ _id: null });
});
