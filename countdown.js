
var myApp = angular.module('myApp', []);

function MyCtrl($scope, $timeout) {
    $scope.minutes = 1;
    $scope.seconds = 1;
    $scope.militime = (($scope.minutes*60000)+($scope.seconds*1000));

    $scope.timeleft = "The next presentation begins in:";
     $scope.takeaseat = "Please take a seat";
    $scope.settings = {
        running:false,
        timeout:false
    }
    $scope.fulltime = 0;
    
    $scope.stop = function() {
    $scope.settings.running = false;
     $scope.settings.timeout = false;
    }
    
    $scope.start = function(){
    	$scope.militime = (($scope.minutes*60000)+($scope.seconds*1000));
$scope.settings.running = true;
        $scope.countdown();
    }
    
    $scope.countdown = function myhandler() {
    	
    	console.log($scope.settings.running);
        if($scope.settings.running == true){
        if ($scope.militime == 0) {
            console.log('end!');
            $scope.settings.timeout = true;
            $scope.settings.running = false;
            return;
        } else {
                $scope.militime = $scope.militime-1000;
        }
        $timeout(myhandler, 1000);
        }
       return;
    }
}
