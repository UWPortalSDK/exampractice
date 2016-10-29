angular.module('portalApp')
.controller('exampracticeCtrl', ['$scope', function ($scope) {
	
	// Import variables and functions from service
    $scope.item = {value:''};

    // Model for the search and list example
    $scope.model = {value: [{
        title: "Chemistry",
        details: "item 1 details",
        category: '1'
    }, {
        title: "Physics",
        details: "item 2 details",
        category: '2'
    }, {
        title: "Item 3",
        details: "item 3 details",
        category: '1'
    }, {
        title: "item 4",
        details: "item 4 details",
        category: '2'
    }, {
        title: "item 5",
        details: "item 5 details",
        category: '1'
    }, {
        title: "item 6",
        details: "item 6 details",
        category: '2'
    }]};

    // initialize the service
    sampleSimpleListFactory.init($scope);	
	$scope.portalHelpers.showView('sampleSimpleListMain.html', 1);

    // Handle click on an item in the list and search example
    $scope.showDetails = function (item) {
        // Set which item to show in the details view
        $scope.item.value = item;
        // Show details view in the second column
        $scope.portalHelpers.showView('sampleSimpleListDetails.html', 2);
    };

    // Handle "previous item" click from the details page
    $scope.prevItem = function () {
        // get previous items in the list
        var prevItem = $scope.portalHelpers.getPrevListItem();
        // refresh details view with the new item
        $scope.showDetails(prevItem);
    }

    $scope.nextItem = function () {
        var nextItem = $scope.portalHelpers.getNextListItem();
        $scope.showDetails(nextItem);
    }

}])
    // Factory maintains the state of the widget
    .factory('sampleSimpleListFactory', ['$http', '$rootScope', '$filter', '$q', function ($http, $rootScope, $filter, $q) {
        var initialized = {
            value: false
        };


        var sourcesLoaded = 0;

        var init = function ($scope) {
            if (initialized.value)
                return;
            initialized.value = true;
        }


        return {
            init: init
        };

    }]);

	
	// Show main view in the first column as soon as controller loads
	$scope.portalHelpers.showView('exampracticeMain.html', 1);
	
	// This function gets called when user clicks an item in the list
	$scope.showDetails = function(item){
		// Make the item that user clicked available to the template
		$scope.detailsItem = item;		
		$scope.portalHelpers.showView('exampracticeDetails.html', 2);
	}
}]);