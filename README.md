# user-roles

This package will add simple user access management to <a href="https://www.meteor.com" target="_blank">Meteor</a> application.

Package is used by <a href="http://www.meteorkitchen.com" target="_blank">Meteor Kitchen</a> - source code generator for Meteor.


### Instalation

```
meteor add perak:user-roles 
```


## Users collection

Collection `Users` extends `Meteor.users` collection. When user is created, `roles: []` array is added to the user document. You can add one or more role names to this array:

```javascript
{
	...user's document...

	roles: ["admin", "user"]

	...
}

```

### Users.isInRole(userId, role)

Check if user is in given role. Example:

```javascript
if(Users.isInRole(Meteor.userId(), "admin")) {
	// user is admin
	...
} else {
	// user is not admin
	...
}
```

### Users.isInRoles(userId, roleList)

Check if user is in any of listed roles. Example:

```javascript
if(Users.isInRoles(Meteor.userId(), ["admin", "staff"])) {
	// user is admin or staff
	...
} else {
	// user is not admin or staff
	...
}
```

### Users.isAdmin(userId)

Check if user is admin. Example:

```javascript
if(Users.isAdmin(Meteor.userId()) {
	// user is admin
	...
} else {
	// user is not admin
	...
}
```

### Users.isAdminOrInRole(userId, role)

Check if user is admin or in given role. Example:

```javascript
if(Users.isAdminOrInRole(Meteor.userId(), "staff") {
	// user is admin or staff
	...
} else {
	// user is not admin or staff
	...
}
```

## Permisions to Users collection

Only admins can update user roles via the client


## Global helpers

### isAdmin()

returns true if current user is admin

```html
{{#if isAdmin}}
	Visible to Admin
{{else}}
	Visible to others
{{/if}}
```

### isUserInRole(role)

returns true if current user is in given role

```html
{{#if isUserInRole "manager"}}
	Visible to Manager
{{else}}
	Visible to others
{{/if}}
```

### isUserInRoles(roleList)

returns true if current user is in any of roles given as array of strings. Example:

```javascript
{{#if isUserInRoles ["admin", "manager"]}}
	Visible to Admin and Manager
{{else}}
	Visible to others
{{/if}}
```

## Publications

### Meteor.subscribe("admin_user", userId)

Subscribes to data of user with given userId. Only user with "admin" role can subscribe. Complete user document is exposed to admin.


### Meteor.subscribe("admin_users")

Subscribes to all users. Only user with "admin" role can subscribe. Following fields from user document are published:

- profile
- roles
- emails
- stats


### Meteor.subscribe("admin_users_paged", extraOptions)

Data from all users, but depending on extraOptions, documents can be filtered, sorted and paged (used in applications generated with meteor-kitchen). Only user with "admin" role can subscribe. Complete user document is exposed to admin.

`extraOptions` is object:

```javascript
{
	searchText: "textToFind", // search string
	searchFields: [ "fieldNameToSearch" ], // list of collection fields to search
	sortBy: "fieldNameToSortBy", // sort by field
	sortAscending: true, // sort direction
	pageNo: 0, // page number (zero-based)
	pageSize: 32, // number of documents per page. If this member is -1 then entire resultset is returned
	doSkip: true, // if this member is "false" then only first page will be returned (pageNo is ignored)
	noPaging: false // if this member value is "true" then pageNo and pageSize are ignored and entire resultset is returned
}
```


### Meteor.subscribe("admin_users_paged_count", extraOptions)

This subscription is using `tmeasday:publish-counts` Meteor (atmosphere) package to return total number of documents in filtered dataset. Used to calculate total number of pages. `extraOptions` argument is the same as described in `admin_users_paged` publication, but only `searchText` and `searchFields` members are used (other members are not required to calculate total number of records and are ignored).


### Meteor.subscribe("current_user_data")

Current user's data. Any user can subscribe to own data. Following fields from user document are exposed:

- username
- profile
- private
- public
- roles
- emails

