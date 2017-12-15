

angular.module('app', [])
    .controller('gitHubDataController', ['$scope','$http', function($scope,$http) {

        $scope.reposLoaded = false;

        $scope.userLoaded = false;

        $scope.username = "josuefunes";

        $http.get("https://api.github.com/users/" + $scope.username)
            .success(function (data) {
                $scope.userData = data;
                loadRepos();
            });

        var loadRepos = function () {
            $http.get($scope.userData.repos_url)
                .success(function (data) {
                    $scope.repoData = data;
                });
        };


        $scope.predicate = '-updated_at';


}]);




/*
{
  "login": "josuefunes",
  "id": 2042218,
  "avatar_url": "https://avatars.githubusercontent.com/u/2042218?v=2",
  "gravatar_id": "",
  "url": "https://api.github.com/users/josufunes",
  "html_url": "https://github.com/josuefunes",
  "followers_url": "https://api.github.com/users/josuefunes/followers",
  "following_url": "https://api.github.com/users/josuefunes/following{/other_user}",
  "gists_url": "https://api.github.com/users/josuefunes/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/josuefunes/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/josuefunes/subscriptions",
  "organizations_url": "https://api.github.com/users/josuefunes/orgs",
  "repos_url": "https://api.github.com/users/josuefunes/repos",
  "events_url": "https://api.github.com/users/josuefunes/events{/privacy}",
  "received_events_url": "https://api.github.com/users/josuefunes/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Josue Funes",
  "company": "Student",
  "blog": "http://www.google.hn",
  "location": "Honduras",
  "email": "josuefunes@outlook.com",
  "hireable": true,
  "bio": null,
  "public_repos": 1,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2017-12-25T18:55:33Z",
  "updated_at": "2017-12-26T20:04:12Z"
}

*/
