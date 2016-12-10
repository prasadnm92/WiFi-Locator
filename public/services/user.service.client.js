/**
 * Created by prasadnm on 12/7/16.
 */
(function() {
    angular
        .module("WifiLoc8rApp")
        .factory("UserService", UserService);

    function UserService($http) {
        var api = {
            register        : register,
            login           : login,
            checkLoggedIn   : checkLoggedIn,
            getCurrentUser : getCurrentUser,
            updateUser : updateUser,
            deleteUser : deleteUser,
            logout          : logout
        };
        return api;

        function register(user) {
            return $http.post("/api/register",user);
        }

        function login(email, password) {
            var user = {
                email: email,
                password: password
            };
            return $http.post("/api/login",user);
        }

        function checkLoggedIn() {
            return $http.post("/api/checkLoggedIn");
        }
        
        function getCurrentUser() {
            return $http.get("/api/user");
        }
        
        function updateUser(user, userId) {
            var url = "/api/user/" + userId;
            return $http.put(url, user);
        }

        function logout() {
            return $http.post("/api/logout");
        }

        function deleteUser(userId) {
            var url = "/api/user/" + userId;
            return $http.delete(url);

        }
    }
})();