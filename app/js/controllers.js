'use strict';
var baseUrl = 'http://infamoss.com:8010';

/* Controllers */
function HomeCtrl() {
}
HomeCtrl.$inject = [];

function PostsCtrl($scope, Post) {
  $scope.posts = Post.query();
}
PostsCtrl.$inject = ['$scope', 'Post'];

function PostDetailCtrl($scope, $routeParams, Post) {
  $scope.post = Post.get({id : $routeParams.id}, function(data) {
	$scope.tagsString = ($.map(data.tags, function(tag, index) { return tag.name; })).join(', ');
  });
}
PostDetailCtrl.$inject = ['$scope', '$routeParams', 'Post'];

function CommentsFormCtrl($scope, Comment) {
  $scope.newComment = {};
  $scope.addComment = function() {
    $scope.post.comments.push(
        Comment.save({post_id : $scope.post.id}, $scope.newComment,
            function() { //Success
                $scope.newComment = {};
		console.log("cleared out newComment");
            })
    );
    $scope.newComment = {};
  }
}
CommentsFormCtrl.$inject = ['$scope', 'Comment'];
