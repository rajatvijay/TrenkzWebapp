app.directive ('card', function() {
	return {
		restrict: 'E',
		scope: {
			info: '='
		},
		templateUrl: 'js/trenkzapp/directives/card.html'	
	};
});