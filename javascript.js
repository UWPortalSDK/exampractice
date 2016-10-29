angular.module('portalApp')
    .controller('exampracticeCtrl', ['$scope', function($scope) { //There is a
        // function "$scope" here

        // mock data
        $scope.items = [{
            title: 'Chemistry',
            tags: ['CHE 102', 'CHE 135'],
            questiontype: ['5 Stars','4 Stars','3 Stars','2 Stars','1 Stars'],
            details: 'The Alchemist Returns'

        }, {
            title: 'Physics',
            tags: ['ECE 105'],
            details: 'Hit your head through the wall'
        }, {
            title: 'Programming',
            tags: ['CS 135', 'ECE 150'],
            details: 'More coffee please '
        }, {
            title: 'Math',
            tags: ['Math 115'],
            details: 'No calculators?!'
        }, {
            title: 'Biology',
            tags: ['BIO 134'],
            details: 'I have photographic memory!!'
        }, {
            title: 'Linear Circuits',
            tags: ['ECE 140'],
            details: 'Tangled'
        }];
        $scope.che102questions = [{
                title: '★ Questions',
                qONE: 'What is the molar mass of CO2?',
				aONE: '44.01'
            },
            {
                title: '★★ Questions',
                qONE: 'The  Province  of  Nova  Scotia  aspires  to  meet  1/10thof  its  domestic  household  power requirements  through  tidal  power.  Census  results  from  2011  indicate  that  there  are 390,000  households  in  the  Province  and  that  on  average  750  households  consume 2.5MW  of  power.  A  European  manufacturer  has  estimated  the  capital  cost fortidal turbines to be €10 million per 3350hp of power output.',
            	aONE: '765 million'
            },
            {
                title: '★★★ Questions',
                qONE: 'If the percent yield of chromium (Cr) is 82%, how many grams of silicon (Si) are required to make 105 g of chromium according to the following unbalanced reaction?',
            	aONE: '52 g'
            }, 
            {
                title: '★★★★ Questions',
                qONE: 'A 100.0g sample of a given hydrocarbon when combused produces 338.0g of CO2 and 69.2g of H2). Find the empirical formula of the hydrocarbon',
            	aONE: 'CH2O'
            }, 
            {
                title: '★★★★★ Questions',
                qONE: 'A  van  der  Waals  gas  is  known  to  have  strong  attractive  intermolecular  forces. Compared  to  an  ideal  gas  at  the  same  volume  andtemperature, the pressure is expected to be lower in the real gas.',
            	aONE: 'FALSE'
            },

        ];

        // Show main view in the first column as soon as controller loads
        $scope.portalHelpers.showView('exampracticeMain.html', 1); //1 means page 1
        //exampracticeMain.html means main is on page 1

        // This function gets called when user clicks an item in the list
        $scope.showDetails = function(item)

        {
            // Make the item that user clicked available to the template
            $scope.detailsItem = item;
            $scope.portalHelpers.showView('exampracticeDetails.html', 2);
        };

        $scope.showSubDetails = function(item) 
        {
            // Make the item that user clicked available to the template
            $scope.detailsItem = item;
            $scope.portalHelpers.showView('exampracticeExam.html', 3);
        };
        
        
        
        $scope.showQuestion = function(item) 
        
        {
            // Make the item that user clicked available to the template
            $scope.detailsItem = item;
            $scope.portalHelpers.showView('exampracticeAddQ.html', 4);
        };
        
        
        
    }]);