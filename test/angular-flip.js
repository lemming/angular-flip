describe('A suite', function() {
    var elm, scope;

    beforeEach(module('angular-flip'));

    beforeEach(inject(function($rootScope, $compile) {
        elm = angular.element(
            '<flip flipped="flipped">' +
                '<flip-front>' +
                    '<div class="content">{{frontValue}}</div>' +
                    '<button flip-toggle>flip vertically</button>' +
                '</flip-front>' +
                '<flip-back flip-toggle>' +
                   '<div class="content">{{backValue}}</div>' +
                   '<h4>Here it is!</h4>' +
                '</flip-back>' +
            '</flip>'
        );

        scope = $rootScope;
        $compile(elm)(scope);
        scope.$digest();
    }));

    it("should replace tags", inject(function($compile, $rootScope) {
        expect(elm.is('div')).toBe(true);
        expect(elm.hasClass('flip')).toBe(true);

        var children = elm.children();

        expect(children.length).toBe(1);

        var child = children[0];

        expect(child.tagName.toLowerCase()).toBe('div');
        expect(child.className).toBe('card');


        var faces = elm.find('div.face');

        expect(faces.length).toBe(2);

        expect(faces.eq(0).hasClass('front')).toBe(true);
        expect(faces.eq(1).hasClass('back')).toBe(true);
    }));

    it("should bind the content", function() {
        scope.$apply(function() {
            scope.frontValue = 'front value';
            scope.backValue = 'back value';
        });

        expect(elm.find('.face.front .content').eq(0).text()).toBe('front value');
        expect(elm.find('.face.back .content').eq(0).text()).toBe('back value');
    });
});