Router.route("/", function() {
	Session.setDefault('counter', 0);
	this.render("home", {
		data: function() {
			return {
				
			}
		}
	});
}, { 
	name: "home", 
	fastRender: true
});