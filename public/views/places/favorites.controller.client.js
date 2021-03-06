/**
 * Created by Vinay on 12/11/2016.
 */

(function() {
    angular
        .module("WifiLoc8rApp")
        .controller("FavoritesController", FavoritesController);


    function FavoritesController($routeParams, PlaceService, UserService) {

        var vm = this;
        vm.init = init;

        $("#tubular-container").remove();
        $("#tubular-shield").css("z-index","0");

        function init() {
            UserService
                .getCurrentUser()
                .success(function (user) {
                    console.dir(user);
                    var userId = user._id;
                    UserService
                        .getFavoritesForUser(userId)
                        .success(function (userObj) {
                            vm.currentUserPlaces = userObj.favorites;
                        })
                        .error(function (error) {
                            console.log(error.stack);
                        })
                })
                .error(function (error) {
                    console.log(error.stack);
                })
        }
        init();
    }


})();