angular.module('itunes', ['ngGrid']);

angular.module('itunes')
  .filter('trustUrl', function ($sce) {
    return function(url) {
      return $sce.trustAsResourceUrl(url);
    };
  });
