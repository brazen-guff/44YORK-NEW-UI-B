(function(){
"use strict";
"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

console.log("::LOADING 44YORK CUSTOM::");

var moduleList = [];

// Please call this at the beinning of every new file, for documentation and possible future use
function registerModule(name) {
  console.log("Registering " + name);
  moduleList.push(name);
}

(function () {
  'use strict';

  // This component was largely copied from NDU

  var app = angular.module('searchAlternatives', ['angularLoad']);
  registerModule('searchAlternatives');

  app.controller('searchAlternativeController', ['angularLoad', '$scope', '$window', '$location', function (angularLoad, $scope, $window, $location) {
    $scope.showSearchBar = true;

    this.$onInit = function () {
      try {
        // eg. query=any,contains,romeo and juliet
        //  only split to length 3 so any commas in the query are retained
        var query = this.parentCtrl.facetService.$location.$$search.query.split(",")[2];
        $scope.scholarLink = "http://scholar.google.com/scholar?hl=en&q=')" + query; // proxyLink('http://scholar.google.com/scholar?hl=en&q=') + query
        $scope.yewnoLink = "https://discover.yewno.com/?query=')" + query; // proxyLink('https://discover.yewno.com/?query=') + query
        $scope.worldcatLink = "http://www.worldcat.org/search?q=')" + query; // proxyLink('http://www.worldcat.org/search?q=') + query
      } catch (e) {
        $scope.showSearchBar = false;
        console.log(e);
        return;
      }
    };

    $scope.setUrls = function (type) {
      $scope.scholarLink = 'http://scholar.google.com/scholar';
      $scope.yewnoLink = 'https://discover.yewno.com';
      $scope.worldcatLink = 'http://www.worldcat.org';

      if ($location.$$search) {
        var query = $location.$$search.query.split(",", 3)[2];
        $scope.scholarLink += '?hl=en&q=' + query;
        $scope.yewnoLink += '?query=' + query;
        $scope.worldcatLink += '/search?q=' + query;
      }

      return true;
    };

    this.$onChanges = function () {
      console.log("Changes");
    };
  }]);

  app.component('prmSearchBarAfter', {
    bindings: { parentCtrl: '<' },
    controller: 'searchAlternativeController',
    template: "\n      <div class=\"default-card zero-margin _md md-primoExplore-theme searchAlternatives\">\n          <div>\n          <p>\n            <div class=class=\"try-txt\"><strong>\n              Try your search in:\n            </strong></div>\n          </p>\n          <a\n            class=\"md-raised md-button md-primoExplore-theme md-ink-ripple\"\n            href={{worldcatLink}}\n            type=\"button\"\n            ng-click='setUrls()'\n            target='_blank'\n            aria-label=\"Search WorldCat\"\n          >\n            <div class=\"worldcatLogo\" alt=\"\"></div>\n          </a>\n          <a\n            class=\"md-raised md-button md-primoExplore-theme md-ink-ripple\"\n            href={{scholarLink}}\n            target='_blank'\n            type=\"button\"\n            ng-click='setUrls()'\n            aria-label=\"Search Google Scholar\"\n          >\n            <div class=\"scholarLogo\" alt=\"\"></div>\n          </a>\n          <a\n            class=\"md-raised md-button md-primoExplore-theme md-ink-ripple\"\n            href={{yewnoLink}}\n            target='_blank'\n            type=\"button\"\n            ng-click='setUrls()'\n            aria-label=\"Search Yewno\"\n          >\n            <div class=\"yewnoLogo\" alt=\"\"></div>\n          </a>\n          </div>\n      </div>\n    "
  });
})();


console.log("::FINISHED LOADING 44YORK CUSTOM::");

// Generate a module consisting of all defined modules
angular.module('viewCustom', moduleList);
})();