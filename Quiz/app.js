// app.js
// create our angular app and inject ngAnimate and ui-router 
// =============================================================================
angular.module('formApp', ['ngAnimate', 'ui.router'])

// configuring our routes 
// =============================================================================
.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

		// route to show our basic form (/form)
		.state('form', {
		    url: '/form',
		    templateUrl: 'form.html',
		    controller: 'formController'
		})

		// nested states 
		// each of these sections will have their own view
		// url will be nested (/form/profile)
		.state('form.profile', {
		    url: '/profile',
		    templateUrl: 'form-profile.html'
		})

        // url will be nested (/form/login)
		.state('form.login', {
		    url: '/login',
		    templateUrl: 'form-login.html'
		})

        // url will be nested (/form/question1)
		.state('form.question1', {
		    url: '/question1',
		    templateUrl: 'form-question1.html'
		})

        // url will be nested (/form/question2)
		.state('form.question2', {
		    url: '/question2',
		    templateUrl: 'form-question2.html'
		})

        // url will be nested (/form/question3)
		.state('form.question3', {
		    url: '/question3',
		    templateUrl: 'form-question3.html'
		})

        // url will be nested (/form/question4)
		.state('form.question4', {
		    url: '/question4',
		    templateUrl: 'form-question4.html'
		})

        // url will be nested (/form/survey)
		.state('form.survey', {
		    url: '/survey',
		    templateUrl: 'form-survey.html'
		})

        // url will be nested (/form/summary)
		.state('form.summary', {
		    url: '/summary',
		    templateUrl: 'form-summary.html'
		})

		// url will be /form/interests
		.state('form.interests', {
		    url: '/interests',
		    templateUrl: 'form-interests.html'
		})

		// url will be /form/payment
		.state('form.payment', {
		    url: '/payment',
		    templateUrl: 'form-payment.html'
		});

    // catch all route
    // send users to the form page 
    $urlRouterProvider.otherwise('/form/login');
})

// our controller for the form
// =============================================================================
.controller('formController', function ($scope) {

    // we will store all of our form data in this object
    $scope.formData = {
        blank1: "____",
        blank2: "________",
        qscore: 0,
        qanswered: 0,
        qcorrect: 0,
        vscore: 0,
        vanswered: 0,
        vcorrect: 0,
        mscore: 0,
        manswered: 0,
        mcorrect: 0,
    };

    // function to process the form
    $scope.processForm = function () {
        alert('awesome!');
    };

    $scope.calculateResult = function () {
      
        if ($scope.formData.q1 !== "") $scope.formData.qanswered = $scope.formData.qanswered + 1;
        if ($scope.formData.q2 !== "") $scope.formData.qanswered = $scope.formData.qanswered + 1;
        if ($scope.formData.q3a !== "" && $scope.formData.q3b !== "") $scope.formData.vanswered = $scope.formData.vanswered + 1;
        if ($scope.formData.q4 !== "") $scope.formData.manswered = $scope.formData.manswered + 1;
        
        if ($scope.formData.q1 === "d") $scope.formData.qcorrect = $scope.formData.qcorrect + 1;
        if ($scope.formData.q2 === "a") $scope.formData.qcorrect = $scope.formData.qcorrect + 1;
        if ($scope.formData.q3a === "650" && $scope.formData.q3b === "LinkedIn") $scope.formData.vcorrect = $scope.formData.vcorrect + 1;
        if ($scope.formData.q4 === "a") $scope.formData.mcorrect = $scope.formData.mcorrect + 1;

        $scope.formData.qscore = $scope.formData.qcorrect / 2 * 100;
        $scope.formData.vscore = $scope.formData.vcorrect / 1 * 100;
        $scope.formData.mscore = $scope.formData.mcorrect / 1 * 100;
        
    };

});
