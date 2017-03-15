require('angular').module('qookiescode')
    .controller('HomeController', [
        '$state',
        '$scope',
        '$rootScope',
        'Parse',
        'User',
        function($state, $scope, $rootScope, Parse, User) {
            'use strict';

            var self = this,
                user,
                CouponUser;
            $scope.pageClass = 'page-home';
            // Parse.User.logOut();

            angular.extend($scope, {
                user: {
                    CouponUser: {
											username:'',
											email:'',
											birthday:'',
											used:'',
										}
                }
            });
						self.sign = function sign(userModel) {
                console.log(userModel);

                user = new Parse.User();
                user.name = userModel.name;
                user.email = userModel.email;
                user.username = userModel.email;
                user.password = userModel.password;
                user.signUp(null).then(function(user) {
                    console.log('user signed up');
                    family = new Family();
                    family.name = userModel.familyName;
                    family.createdBy = user;
                    return family.save();
                }).then(function(newfamily) {
                    console.log('family saved');
                    family = newfamily;
                    familyUser = new FamilyUser();
                    familyUser.user = user;
                    familyUser.family = family;
                    return familyUser.save();
                }).then(function(familyUser) {
                    var inviteUsers = [];

                    $scope.user.userInvite.email.forEach(function(email){
                      var userInvite = new UserInvite();
                      userInvite.email = email;
                      userInvite.family = family;
                      userInvite.invitedBy = user;
                      inviteUsers.push(userInvite);
                    });

                    return Parse.Object.saveAll(inviteUsers);
                }, function(error) {
                    console.error(error);
                });

            };





        }
    ]);
