require('angular').module('qookiescode')
    .controller('UsersController', [
        '$state',
        '$scope',
        '$rootScope',
        'Parse',
        'User',
        'CouponUser',
        function($state, $scope, $rootScope, Parse, User, CouponUser) {
            'use strict';

            var self = this;

            self.hello = 'hello';

            $scope.pageClass = 'page-users';

            angular.extend($scope, {
                user: Parse.User.current(),
                pageClass: 'page-users',
                CouponUsers: []
            });


            var query = new Parse.Query(CouponUser);
            query.find().then(function(nice) {
                $scope.CouponUsers = CouponUsers;
                console.log($scope.CouponUsers);
            });



            self.logout = function() {
                $rootScope.currentUser = null;
                Parse.User.logOut();
                $state.go('login');
            };





        }
    ]);
