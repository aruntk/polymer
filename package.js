Package.describe({
	summary: "Google polymer for material design",
	version: "0.0.5",
	git: "https://github.com/arunhedcet/polymer.git",
	name: 'aruntk:polymer'
});

Npm.depends({
	bower: '1.3.12'
});

Package.onUse(function(api) {
	api.use('webapp', 'server');
  	api.use(['templating'], 'client');
  	api.use(['underscore'], ['client', 'server']);
	api.versionsFrom('METEOR@0.9.0');
	api.addFiles('createfiles.js', 'server');
	api.addFiles('importfiles.html', 'client');
});
