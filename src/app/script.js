// Code goes here
var app = angular.module('myApp', []);
<script type="text/javascript">
                $(document).ready(function() {
                  $('.carousel').carousel({
                    interval: 2000
                  })
                });
              
                $(".carControl").click(function(e) {
                  e.preventDefault()
                });
             
              </script>
app.controller('MainCtrl', function($scope) {
    $scope.slides = slides;
});