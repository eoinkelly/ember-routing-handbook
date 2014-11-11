window.Simple = Ember.Application.create({
});

Simple.Router.map(function() {
  this.resource("about", { path: "/about" }, function() {
    this.route("foo", { path: "/favs" });
  });
  this.route("favorites", { path: "/favs" });
});

setTimeout(function() {
  console.log('starting introspection');
  var rdb = RouteDebug.create();
  console.log(JSON.stringify(rdb.getTree()));
  window.treeData = rdb.getTree();

  buildTree('#tree-container');


}, 1000);
