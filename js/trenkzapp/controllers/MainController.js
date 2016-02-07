app.controller('MainController', [
	'$scope', function($scope) {
		$scope.categories = [
			{
				name: "Oriental",
				price: 2000
			},
			{
				name: "Sulekha",
				price: 3000
			}
		];
	}
]);