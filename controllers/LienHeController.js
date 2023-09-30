window.LienHeController = function ($scope, $routeParams){
    $scope.gioithieu = "Đây là giới thiệu";
    console.log($routeParams)
    console.log($routeParams.id)
    console.log($routeParams.name)
    let id = $routeParams.id
    console.log(id)
}