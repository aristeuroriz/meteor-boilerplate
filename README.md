Meteor Boilerplate

Features

Back-end

	1 - Accounts Base (accounts-base);
	2 - Accounts Password (accounts-password);
	3 - Accounts Facebook (accounts-facebook);
	4 - Accounts Google (accounts google);
	5 - Iron Router (iron:router);
	6 - Fast Render (meteorhacks:fast-render);
	7 - Tests: Jasmine (sanjo:jasmine)
	8 - Tests: Velocity (velocity:html-reporter)


Front-end:

	1 - Bootstrap 3 (twbs:bootstrap);
	2 - Bootswatch Theme Flat UI (jss:flat-ui);
	3 - Bootstrap Accounts UI (ian:accounts-ui-bootstrap-3);
	4 - Sass (fourseven:scss);
	5 - Font Awesome (fortawesome:fontawesome);


Directories Patterns:

```
client/                 # Client folder
    config/             # Configuration files (on the client)
    lib/                # Library files that get executed first
    	events/			# Events folder
    	helpers/		# Helpers folder
    startup/            # Javascript files on Meteor.startup()
    stylesheets         # Sass files
    views/              # Contains all views(*)
collections/            # Model files, for each Meteor.Collection(*)
config/					# Config files commons between server-side and client-side
private/                # Private files
public/                 # Public files
routes/                 # All routes(*)
server/                 # Server folder
	config/				# Configuration files (on the server)
    lib/                # Server side library folder
    publications/       # Collection publications(*)
    startup/            # On server startup
tests/					# All files from test suites
```