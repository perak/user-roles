Package.describe({
	summary: "User roles package for Meteor",
	version: "1.0.11",
	git: "https://github.com/perak/user-roles.git"
});

// Before Meteor 0.9?
if(!Package.onUse) Package.onUse = Package.on_use;

Package.onUse(function(api) {
	// Meteor >= 0.9?
	if(api.versionsFrom) api.versionsFrom('METEOR@0.9.0');

	api.use('underscore');
	api.use('templating');

	api.add_files('both/collections/users.js', ['client', 'server']);
	api.add_files('client/helpers.js', 'client');
	api.add_files('server/collections/users.js', 'server');
	api.add_files('server/publications/admin_user.js', 'server');
	api.add_files('server/publications/admin_users.js', 'server');
	api.add_files('server/publications/current_user_data.js', 'server');
	api.export('Users');
});
