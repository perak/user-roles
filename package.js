Package.describe({
	summary: "User roles package for Meteor",
	version: "1.0.0",
	git: "https://github.com/perak/user-roles.git"
});

Package.onUse(function(api) {
	api.add_files('both/collections/users.js', ['client', 'server']);
	api.add_files('client/helpers.js', 'client');
	api.add_files('server/collections/users.js', 'server');
	api.add_files('server/publications/admin_user.js', 'server');
	api.add_files('server/publications/admin_users.js', 'server');
	api.add_files('server/publications/current_user_data.js', 'server');
	api.export('Users');
});