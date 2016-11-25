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
      $(this).unbind("click");//or some other way to make sure that this only happens once
     });
    var refreshId = setTimeout(function(){
    // if(!$('.ytp-large-play-button.ytp-button')){
    //   console.log('hmmmk');
    //   $('.ytp-large-play-button.ytp-button').style.display = "none";
    //   clearInterval(refreshId);
    // }else{
    //   console.log('kmmmh');
    // }
    var x =document.body.childNodes;
    children = document.querySelectorAll('.ytp-thumbnail-overlay-image');
    children[0].style.zIndex = "1";
}, 5000);

  });
}]);
