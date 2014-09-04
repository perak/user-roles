var Helpers = {};

Helpers.isAdmin = function() { 
  return Users.isAdmin(Meteor.userId());
};

Helpers.isUserInRole = function (role, options) {
  return Users.isInRole(Meteor.userId(), role);
};

Helpers.isUserInRoles = function (roleList, options) {
  return Users.isInRoles(Meteor.userId(), roleList);
};

_.each(Helpers, function (helper, key) {
  Handlebars.registerHelper(key, helper)
});