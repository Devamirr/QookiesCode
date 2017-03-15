require('angular').module('qookiescode')
    .controller('UsersController', [
        '$state',
        '$scope',
        '$rootScope',
        'Parse',
        'User',
        function($state, $scope, $rootScope, Parse, User) {
            'use strict';

            var self = this,
                user;
            self.hello = 'hello';

            $scope.pageClass = 'page-home';

            angular.extend($scope, {
                user: Parse.User.current(),
                tasks: [],
                markAll: false,
                pageClass: 'page-dashboard',
            });

            self.sign = function sign(userModel) {
                console.log(userModel);

                user = new Parse.User();
                user.email = userModel.email;
                user.username = userModel.email;
                user.password = userModel.password;
                user.signUp(null).then(function(user) {

                    return Parse.Object.saveAll(user);
                }, function(error) {
                    console.error(error);
                });

            };



            self.login = function login(user) {
                console.log(user);
                Parse.User.logIn(user.email, user.password).then(function(user) {
                    console.log('succes login');
                    console.log(user);
                    // $state.go('home');
                }, function(error) {
                    console.log(error);
                });
            };

            self.logout = function() {
                $rootScope.currentUser = null;
                Parse.User.logOut();
                $state.go('login');
            };





        }
    ]);
