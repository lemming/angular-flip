angular.module('angular-flip', [])
.directive('flip', function() {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        scope: {
            flipped: '=?'
        },
        template:
            '<div class="flip">' +
                '<div class="card" ng-transclude></div>' +
            '</div>',
        controller: ['$scope', '$element', function($scope, $element) {
            this.toggle = function() {
                var flipped = !$element.hasClass('flipped');
                $scope.$apply(function() {
                    $scope.flipped = flipped;
                })
            };

            this.flipFront = function() {
                $scope.flipped = false;
            };

            this.flipBack = function() {
                $scope.flipped = true;
            }
        }],
        link: function(scope, elm, attrs) {
            scope.$watch('flipped', function(newValue, oldValue) {
                if (newValue) {
                    elm.addClass('flipped');
                } else {
                    elm.removeClass('flipped');
                }
            });
        }
    }
})
.directive('flipFront', function() {
    return {
        require: '^flip',
        restrict: 'E',
        replace: true,
        transclude: true,
        template:
            '<div class="face front" ng-transclude></div>'
    }
})
.directive('flipBack', function() {
    return {
        require: '^flip',
        restrict: 'E',
        replace: true,
        transclude: true,
        template:
            '<div class="face back" ng-transclude></div>'
    }
})
.directive('flipToggle', function() {
    return {
        require: '^flip',
        restrict: 'A',
        link: function(scope, elm, attrs, controller) {
            var previousValue;

            attrs.$observe('flipToggle', function(value) {
                if (!value) {
                    value = 'click'
                }

                if (previousValue) elm.off(previousValue, controller.toggle);

                previousValue = value;

                elm.on(value, controller.toggle);
            });
        }
    }
});
