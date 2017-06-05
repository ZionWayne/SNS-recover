

var wishlist = angular.module("wishlist",[]);
	wishlist.controller("wishList",function($scope){
		$scope.orderList = [
				{
					bookName:'程序员的思维修炼',
					auther:'〔美〕亨特（Andy Hunt）',
					oldPrice:18.00,
					count:1,
					newPrice:14.00,
					selected:false,
				},
				{
					bookName:'你不知道的JavaScript（上卷）',
					auther:'〔美〕Kyle Simpson',
					oldPrice:24.99,
					count:1,
					newPrice:20.00,
					selected:false,
				},
				{
					bookName:'数据结构与算法JavaScript描述',
					auther:'〔美〕Michael McMillan',
					oldPrice:29.99,
					count:1,					
					newPrice:24.00,
					selected:false,
				},
				{
					bookName:'深入浅出Node.js',
					auther:'朴灵',
					oldPrice:39.99,
					count:1,
					newPrice:32.00,
					selected:false,
				},
				{
					bookName:'图解HTTP',
					auther:'〔日〕上野宣',
					oldPrice:19.99,
					count:1,
					newPrice:15.00,
					selected:false,
				},
				{
					bookName:'JavaScript基础教程（第 9 版）',
					auther:'〔美〕Dori Smith 〔美〕Tom Negrino',
					oldPrice:34.99,
					count:1,
					newPrice:29.00,
					selected:false,
				},
		];
			$scope.DeleteOrder = function(name){
				$scope.orderList.forEach(function( order , i , list){
					if(order.bookName == name ){
						list.splice(i,1);
					}
				});
			}

			$scope.DeleteOrders = function(){
							for(var i = $scope.orderList.length-1;i>=0;i--){
								if($scope.orderList[i].selected){
									$scope.orderList.splice(i,1);
								}
							}
						}
			
			$scope.CheckAll = (function(){
						var bool = false;
						return function(){
									bool = !bool;
								for(var i = $scope.orderList.length-1;i>=0;i--){
										$scope.orderList[i].selected = bool;
									}
						};
									
					})();
			
			$scope.allPrices = function(){
					$scope.allprice = 0;
						for(var i = $scope.orderList.length-1;i>=0;i--){
								if($scope.orderList[i].selected){
									$scope.allprice += $scope.orderList[i].newPrice;
									
								}
							}
					return $scope.allprice;
			};
			$scope.nums = function(){
					$scope.num = 0;
						for(var i = $scope.orderList.length-1;i>=0;i--){
								if($scope.orderList[i].selected){
									$scope.num += $scope.orderList[i].count;
									
								}
							}
					return $scope.num;
			};
			
			
		
	});
