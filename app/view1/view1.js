'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {

  $(document).ready(function(){
    console.log('hello');
    $(".playvideo").click(function(){
      console.log('document');
      $(".bound2")[0].src += "&autoplay=1";
      $(".bound3")[0].src += "&autoplay=1";
      setTimeout(function(){ $('.playvideo').hide(); }, 3000);
      $(this).unbind("click");//or some other way to make sure that this only happens once
     });
    var refreshId = setTimeout(function(){
    var x =document.body.childNodes;
    children = document.querySelectorAll('.ytp-thumbnail-overlay-image');
    children[0].style.zIndex = "1";
}, 5000);

  });
}]);
