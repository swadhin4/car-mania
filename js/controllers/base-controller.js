carApp.controller('carController',['$scope','$rootScope','filterFilter',
                                   
 function($scope, $rootScope, filterFilter) {
	$scope.selecteCarImageList=[];
	 $scope.myInterval = 3000;
		$scope.carList=[
		            	{
		            		carName:"Chevrolet",
		            		model:"MY2017",
		            		series:"Pexels",
		            		images:[
		            		         {
		            		        	 image:"img/carpic1.jpg"
		            		         },
		            		         {
		            		        	 image: "img/carpic2.jpg"
		            		         }
		            		      ]
		            	},
		            	{
		            		carName:"Genesis",
		            		model:"MY2018",
		            		series:"G80",
		            		images:[
		            		         {
		            		        	 image:"img/carpic3.jpg"
		            		         },
		            		         {
		            		        	 image: "img/carpic4.jpg"
		            		         }
		            		      ]
		            	},
		            	{
		            		carName:"Toyota",
		            		model:"MY2019",
		            		series:"Camry",
		            		images:[
		            		         {
		            		        	 image:"img/carpic5.jpg"
		            		         },
		            		         {
		            		        	 image: "img/carpic6.jpg"
		            		         },
		            		         {
		            		        	 image: "img/carpic7.jpg"
		            		         }
		            		      ]
		            	}
		            ]
		
		
		$scope.getCarImages=function(selectedCar){
			$scope.selecteCarImageList=[];
			$.each(selectedCar.images,function(key,val){
				$scope.selecteCarImageList.push(val);
			});
			console.log($scope.selecteCarImageList);
		}
 }]);
