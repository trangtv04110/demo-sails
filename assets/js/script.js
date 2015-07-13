angular.module('UserApp', []);
angular.module('UserApp').controller('IndexController', ['$scope', function($scope) {
	io.socket.get('/user', function(data) {
		$scope.users = data;
		$scope.$apply();
	});

	io.socket.on('user', function(event) {
		switch(event.verb) {
			case 'created':
				$scope.users.push(event.data);
				$scope.$apply();
				break;
			case 'updated':
				io.socket.get('/user', function(data) {
					$scope.users = data;
					$scope.$apply();
				});
				break;
			default:
				alert(event.verb);
		}
	});
}]);