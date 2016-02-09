app.controller('MainController', [
	'$scope', function ($scope) {
		$scope.categories = [
			{
				name: "Dance",
				id: 1
			},
			{
				name: "Gymnasium",
				id: 2
			},
			{
				name: "Singing",
				id: 3
			},
			{
				name: "Cricket",
				id: 4
			},
			{
				name: "Swimming",
				id: 5
			},
			{
				name: "Football",
				id: 6
			},
			{
				name: "Tennis",
				id: 7
			},
			{
				name: "Arts",
				id: 8
			}
		]
		$scope.data = [
			{
				id: 1,
				category: "Dance",
				classes: [
					{
						name: "Altaf Dance Academy",
						address: "Sector 26,Pratap Nagar,Jaipur-302033,Rajasthan",
						contact_no: "9672274162"
					},
					{
						name: "The Step Up",
						address: "E-126,Chitrakoot Colony,Vaishali Nagar,Jaipur-302021,Rajasthan",
						contact_no: "9251929729"
					},
					{
						name: "ARDMA-Art For Recreation Dance & Music Academy ",
						address: "Plot No.59,S B Vihar Colony,Swej Farm,New Sanganer Road,Sodala,Jaipur-302019",
						contact_no: "0141-3384913,7300215955,9001275477"
					},
					{
						name: "Fusion Dance Academy",
						address: "Hanumant Tower,Near Canara Bank,Central Spine,Vidhyadhar Nagar,Jaipur-302029,Rajasthan",
						contact_no: "8947987661,9660868100"
					},
					{
						name: "Xtreme Dance Academy",
						address: "No.B-45,Ramganj Bazar,Jaipur-3020030",
						contact_no: "9269486175,8890400702"
					},
					{
						name: "S Group Dance Studio",
						address: "118/119,Ganesh Nagar,Niwaru Road,Jhotwara,Jaipur-302012",
						contact_no: "7737903959"
					},
					{
						name: "Greenway Dance Academy",
						address: "67 B,Devi Nagar,New Sanganer Road,Sodala,Near Metro Pillar 79,Jaipur-302019",
						contact_no: "0141-3382957"
					},
					{
						name: "Fire The Dance Academy",
						address: "MA Vaishnav Tower,Sheopur Road,Near Gulab Vihar,Pratap Nagar,Jaipur-302030",
						contact_no: "0141-3382503"
					},
					{
						name: "Vibration",
						address: "Shop no. B-7 ,Dhanshree Tower 2nd Central Spine,Vidhyadhar Nagar,Jaipur-302039",
						contact_no: "0141-3387261"

					},
					{
						name: "The Dance & Fitness Studio",
						address: "D6/80,Chitrakoot,Vaishali Nagar,Jaipur-302021",
						contact_no: "9680422236"
					}
				]
			},
			{
				id: 2,
				category: "Gymnasium",
				classes: [
					{
						name: "Samson Gym",
						address: "36_37 Prithvi Nagar,Naya Kheda,Vidhyadhar Nagar,Jaipur-302039 ",
						contact_no: "9829549507"
					},
					{
						name: "HMMR's Fitness Gym",
						address: "Near Jagatpura Fatak,Jagatpura,Near Golden Domes",
						contact_no: "8947847121"
					}
				]
			},
			{
				id: 3,
				category: "Singing",
				classes: [
					{
						name: "Star Music Academy",
						address: "House No.-270,Malviya Nagar,Jaipur-302017",
						contact_no: "9829188796"
					},
					{
						name: "Angel's Music Academy",
						address: " B-29,Tonk Road,Dev Nagar,Tonk Phatak,Jaipur-302015",
						contact_no: "7822858588"
					},
					{
						name: "Tansen Sangeet Mahavidyalaya",
						address: "A/489,Amrapali Marg, Opp. Khadi Bhandar,Vaishali,Jaipur-302021",
						contact_no: "0141-3305445"
					}
				]
			},
			{
				id: 4,
				category: "Cricket",
				classes: [
					{
						name: "Little Master Cricket Academy",
						address: "E-95/96 Subash Marg,C Scheme,Jaipur-302001",
						contact_no: "9983366555"
					}
				]
			},
			{
				id: 5,
				category: "Swimming",
				classes: [
					{
						name: "Oriental Martial Arts & Sports Academy",
						address: "B-5,Radha Vihar,New Sanganer Road,Sodala,Opp. Hotel Raj Plaza,Jaipur-302019",
						contact_no: "0141-3302065"
					},
					{
						name: "Kanoriya Swimming Pool",
						address: "Plot No.-51,Heera Path,New Sanganer Road,Mansarowar,Krishna Vihar-A,Opp. Of Bank Of Baroada-302020",
						contact_no: "9352202976,9314630524"
					}
				]
			},
			{
				id: 6,
				category: "Football",
				classes: [
					{
						name: "Jaipur Football Club Pvt Ltd",
						address: "Shop No:-21,Mansarovar,Shipra Path Shopping Centre,Jaipur-302020",
						contact_no: "0141-4003020,9828400100"
					}
				]
			},
			{
				id: 7,
				category: "Tennis",
				classes: [
					{
						name: "Jamna Tennis Academy",
						address: "100 ft New Loha Handi Road,Near Road No.14 Flyover,Sikar Road,Before Apna Gaon Hotel,jaipur-302039",
						contact_no: "0141-3388685"
					},
					{
						name: "Swalambi Tennis Academy",
						address: "Plot Number-47&52,Vaishali Nagar,Jaipur-302021",
						contact_no: "8739990434"
					}
				]
			},
			{
				id: 8,
				category: "Arts",
				classes: [
					{
						name: "Sangeeta Hobby Classes",
						address: "86/206,Montessori School,Khumbha Marg,Pratap Nagar,Jaipur-302033",
						contact_no: "0141-2793758"
					},
					{
						name: "Kala Bharti",
						address: "S-24,Near MTS Tower,Amprapali Circle,Vaishali Nagar,Jaipur",
						contact_no: "8955070777,0141-5101288"
					},
					{
						name: "Modern Gurukul Academy",
						address: "D-92 Z,MeeraMarg, Bani Park,Jaipur-302006",
						contact_no: "0141-2206930,9784597275"
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