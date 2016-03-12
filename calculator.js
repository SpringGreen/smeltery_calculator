angular.module('calculatorApp', [])
.controller('CalculatorController', ['$scope', function($scope) {

    $this = this;

    $scope.controllers = 1;
    $scope.tanks = 1;
    $scope.drains = 1;
    $scope.faucets = 1;
    $scope.basins = 1;
    $scope.tables = 1;

    $scope.width = 1;
    $scope.depth = 1;
    $scope.height = 1;

    $scope.calculate = function() {

        controllerNum = $this.getNumber($scope.controllers);
        tankNum = $this.getNumber($scope.tanks);
        drainNum = $this.getNumber($scope.drains);
        faucetNum = $this.getNumber($scope.faucets);
        basinNum = $this.getNumber($scope.basins);
        tableNum = $this.getNumber($scope.tables);

        widthNum = $this.getNumber($scope.width);
        depthNum = $this.getNumber($scope.depth);
        heightNum = $this.getNumber($scope.height);

        blocks = widthNum * depthNum;
        blocks += 2 * widthNum * heightNum;
        blocks += 2 * depthNum * heightNum;
        blocks -= (controllerNum + tankNum + drainNum);

        bricks = blocks * 4;
        bricks += controllerNum * 8;
        bricks += tankNum + 8;
        bricks += drainNum * 6;
        bricks += faucetNum * 3;
        bricks += basinNum * 7;
        bricks += tableNum * 7;

        sand = tankNum;
        sand += Math.ceil(bricks / 2);

        gravel = Math.ceil(bricks / 2);

        clay = Math.ceil(bricks / 2);

        $scope.blocks = blocks;
        $scope.bricks = bricks;
        $scope.sand = sand;
        $scope.gravel = gravel;
        $scope.clay = clay;

    };
    this.getNumber = function(n) {
        if (!isNaN(n)) return (parseInt(n));
        else return 0;
    }

    $scope.calculate();
}]);
