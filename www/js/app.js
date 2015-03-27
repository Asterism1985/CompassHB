// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.controller('SermonCtrl', function($scope, $http) {

	ionic.Platform.ready(function(){
	    if(typeof analytics !== undefined) {
            // analytics.debugMode();
            analytics.startTrackerWithId("UA-53384235-4");
        } else {
            console.log("Google Analytics Unavailable");
        }
	});

	$http.get('http://www.compasshb.com/feed/sermons.json').then(function(res) {
        $scope.sermons = res.data;
        analytics.trackView("Main Controller");
    });

    $scope.openVideo = function (slug) {
    	window.open('http://www.compasshb.com/' + slug ,'_blank','location=yes');
    }

    $scope.initEvent = function() {
        if(typeof analytics !== undefined) {
            analytics.trackEvent("Category", "Action", "Label", 25);
        }
    }

});
