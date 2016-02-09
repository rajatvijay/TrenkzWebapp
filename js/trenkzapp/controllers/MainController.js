app.controller('MainController', [
	'$scope', function ($scope) {
		$scope.categories = [
			{
				name: "Dance",
				id: 1
			},
			{
				name: "Singing",
				id: 2
			}
		]
		$scope.data = [
			{
				id: 1,
				category: "dance",
				classes: [
					{
						name: "Steps and Rhythm",
						address: "B-38 Triveni Nagar",
						price: 2000,
						contact_no: "9602833112",
						image: ""
					},
					{
						name: "Steps and Rhythm",
						address: "B-38 Triveni Nagar",
						price: 1000,
						contact_no: "9602833112",
						image: ""
					},
					{
						name: "Steps and Rhythm",
						address: "B-38 Triveni Nagar",
						price: 2000,
						contact_no: "9602833112",
						image: ""
					},
					{
						name: "Steps and Rhythm",
						address: "B-38 Triveni Nagar",
						price: 2000,
						contact_no: "9602833112",
						image: ""
					},
					{
						name: "Steps and Rhythm",
						address: "B-38 Triveni Nagar",
						price: 2000,
						contact_no: "9602833112",
						image: ""
					},
					{
						name: "Steps and Rhythm",
						address: "B-38 Triveni Nagar",
						price: 2000,
						contact_no: "9602833112",
						image: ""
					},
					{
						name: "Steps and Rhythm",
						address: "B-38 Triveni Nagar",
						price: 2000,
						contact_no: "9602833112",
						image: ""
					},
					{
						name: "Steps and Rhythm",
						address: "B-38 Triveni Nagar",
						price: 2000,
						contact_no: "9602833112",
						image: ""
					},
					{
						name: "Steps and Rhythm",
						address: "B-38 Triveni Nagar",
						price: 2000,
						contact_no: "9602833112",
						image: ""
					},
					{
						name: "Steps and Rhythm",
						address: "B-38 Triveni Nagar",
						price: 2000,
						contact_no: "9602833112",
						image: ""
					},
					{
						name: "Steps and Rhythm",
						address: "B-38 Triveni Nagar",
						price: 2000,
						contact_no: "9602833112",
						image: ""
					},
					{
						name: "Steps and Rhythm",
						address: "B-38 Triveni Nagar",
						price: 2000,
						contact_no: "9602833112",
						image: ""
					},
					{
						name: "Steps and Rhythm",
						address: "B-38 Triveni Nagar",
						price: 2000,
						contact_no: "9602833112",
						image: ""
					},
					{
						name: "Steps and Rhythm",
						address: "B-38 Triveni Nagar",
						price: 2000,
						contact_no: "9602833112",
						image: ""
					},
					{
						name: "Steps and Rhythm",
						address: "B-38 Triveni Nagar",
						price: 2000,
						contact_no: "9602833112",
						image: ""
					},
					{
						name: "Steps and Rhythm",
						address: "B-38 Triveni Nagar",
						price: 2000,
						contact_no: "9602833112",
						image: ""
					}
				]
			},
			{
				id: 2,
				category: "singing",
				classes: [
					{
						name: "Oberoi",
						address: "B-38 Triveni Nagar",
						price: 2000,
						contact_no: "9602833112",
						image: ""
					},
					{
						name: "Oberoi",
						address: "B-38 Triveni Nagar",
						price: 1000,
						contact_no: "9602833112",
						image: ""
					},
					{
						name: "Oberoi",
						address: "B-38 Triveni Nagar",
						price: 2000,
						contact_no: "9602833112",
						image: ""
					},
					{
						name: "Oberoi",
						address: "B-38 Triveni Nagar",
						price: 2000,
						contact_no: "9602833112",
						image: ""
					},
					{
						name: "Oberoi",
						address: "B-38 Triveni Nagar",
						price: 2000,
						contact_no: "9602833112",
						image: ""
					},
					{
						name: "Oberoi",
						address: "B-38 Triveni Nagar",
						price: 2000,
						contact_no: "9602833112",
						image: ""
					},
					{
						name: "Oberoi",
						address: "B-38 Triveni Nagar",
						price: 2000,
						contact_no: "9602833112",
						image: ""
					},
					{
						name: "Oberoi",
						address: "B-38 Triveni Nagar",
						price: 2000,
						contact_no: "9602833112",
						image: ""
					},
					{
						name: "Oberoi",
						address: "B-38 Triveni Nagar",
						price: 2000,
						contact_no: "9602833112",
						image: ""
					},
					{
						name: "Oberoi",
						address: "B-38 Triveni Nagar",
						price: 2000,
						contact_no: "9602833112",
						image: ""
					},
					{
						name: "Oberoi",
						address: "B-38 Triveni Nagar",
						price: 2000,
						contact_no: "9602833112",
						image: ""
					},
					{
						name: "Oberoi",
						address: "B-38 Triveni Nagar",
						price: 2000,
						contact_no: "9602833112",
						image: ""
					},
					{
						name: "Oberoi",
						address: "B-38 Triveni Nagar",
						price: 2000,
						contact_no: "9602833112",
						image: ""
					},
					{
						name: "Oberoi",
						address: "B-38 Triveni Nagar",
						price: 2000,
						contact_no: "9602833112",
						image: ""
					},
					{
						name: "Oberoi",
						address: "B-38 Triveni Nagar",
						price: 2000,
						contact_no: "9602833112",
						image: ""
					},
					{
						name: "Oberoi",
						address: "B-38 Triveni Nagar",
						price: 2000,
						contact_no: "9602833112",
						image: ""
					}
				]
			}
		]
		$scope.cat = $scope.data[0];
		$scope.categoryClick = function (id, event) {
			for (var index = 0; index < $scope.data.length; index++) {
				if (id == $scope.data[index].id) {
					$scope.cat = $scope.data[index];
				}
			}
		}
	}
]);