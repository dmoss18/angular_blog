'use strict';

/* Services */
var blogServices = angular.module('blogServices', ['ngResource']);

//Post service
blogServices.factory(
  'Post', 
  function($resource) {
    return $resource(
	'http://blog.infamoss.com/posts/:id', 
	{id: "@id"},
	{update : {method : "PUT", options : {}, isArray : false}}
    );
  }
);

//Comment service
blogServices.factory(
  'Comment',
  function($resource) {
    return $resource(
        'http://blog.infamoss.com/posts/:post_id/comments/:id',
        {id: "@id"},
        {update : {method : "PUT", options : {}, isArray : false}}
    );
  }
);
