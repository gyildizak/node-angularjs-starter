app.controller('indexController', ['$scope', 'indexFactory', ($scope, indexFactory) => {
	console.log('hi!');

	indexFactory.getData().then(data => {
		console.log(data);
	})
}]);