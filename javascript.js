angular.module('portalApp')
.controller('exampracticeCtrl', ['$scope', function ($scope) {
	
	// mock data
	$scope.items = [
		{
			title:'Chemistry',
			tags: ['CHE 102', 'CHE 135'],
			details: 'The Alchemist Returns'
		},
		{
			title:'Physics',
			tags: ['ECE 105'],
			details: 'Hit your head through the wall'
		},
		{
			title:'Programming',
			tags: ['CS 135', 'ECE 150'],
			details: 'More coffee please '
		},
		{
			title:'Math',
			tags: ['Math 115'],
			details: 'No calculators?!'
		},
		{
			title: 'Biology',
			tags: ['BIO 134'],
			details: 'I have photographic memory!!'
		},
		{
			title:'Linear Circuits',
			tags: ['ECE 140'],
			details: 'Tangled'
		}
	];
	
	// Show main view in the first column as soon as controller loads
	$scope.portalHelpers.showView('exampracticeMain.html', 1);
	
	// This function gets called when user clicks an item in the list
	$scope.showDetails = function(item){
		// Make the item that user clicked available to the template
		$scope.detailsItem = item;		
		$scope.portalHelpers.showView('exampracticeDetails.html', 2);
	}
}]);
