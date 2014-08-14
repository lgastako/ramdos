console.log("ramdos begins.");

angular.module("RamdosApp", []) //, ["ngResource"]);

.controller("NavController", function($scope) {
    $scope.navItems = [
        {"label": "Graph",
         "href": "#graph"},
        {"label": "Search",
         "href": "#search"},
    ];
})

.controller("SearchController", function($scope) {
    $scope.query = null;
})

.controller("GraphController", function($scope) {

})

.controller("NullStateController", function($scope) {})

;
