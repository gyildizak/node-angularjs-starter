app.factory('indexFactory', ['$http', ($http) => {
	const getData = () => {
		return $http({
			url: 'https://jsonplaceholder.typicode.com/users',
			method:'GET'
		})
			.then((response) => {
				return response.data;
			}, () => {
				console.log('Fail');
			});
	};

	return {
		getData,
	};
}]);
