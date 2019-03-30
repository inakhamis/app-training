angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('apptraiing', {
    url: '/page1',
    templateUrl: 'templates/apptraiing.html',
    controller: 'apptraiingCtrl'
  })

  .state('android', {
    url: '/page2',
    templateUrl: 'templates/android.html',
    controller: 'androidCtrl'
  })

  .state('iOS', {
    url: '/page3',
    templateUrl: 'templates/iOS.html',
    controller: 'iOSCtrl'
  })

  .state('aboutUs', {
    url: '/page4',
    templateUrl: 'templates/aboutUs.html',
    controller: 'aboutUsCtrl'
  })

  .state('sliderPage', {
    url: '/page5',
    templateUrl: 'templates/sliderPage.html',
    controller: 'sliderPageCtrl'
  })

$urlRouterProvider.otherwise('/page5')


});