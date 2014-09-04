Users = Meteor.users;

Users.isInRole = function (userId, role) {
  var user = Users.findOne({_id: userId});
  return !!(user && user.roles && user.roles.indexOf(role) != -1);
};

Users.isInRoles = function (userId, roleList) {
	var user = Users.findOne({_id: userId});
	if(!user || !user.roles) {
		return false;
	}

	var granted = _.intersection(roleList, user.roles);
	if(!granted || granted.length == 0) {
		return false;
	}
	return true;
};

Users.isAdmin = function (userId) {
  return Users.isInRole(userId, "admin");
};

Users.isAdminOrInRole = function (userId, role) {
  return Users.isInRole(userId, "admin") || Users.isInRole(userId, role);
};
