'use strict';

describe('angular convertJp', function () {

    var $rootScope;
    var $compile;

    beforeEach(module('ngConvertJp'));

    beforeEach(inject(function ($injector) {
        $rootScope = $injector.get('$rootScope');
        $compile = $injector.get('$compile');
    }));

    it('convert full-width alphabet to half-width', function () {
        var element = $compile('<input type="text" ng-convert-jp>')($rootScope);

        element.val('ＬＬＬ０１２');

        element.triggerHandler('change');

        expect(element.val()).toBe('LLL012');
    });
    
    it('convert half-width kana to full-width', function() {
        var element = $compile('<input type="text" ng-convert-jp>')($rootScope);

        element.val('ｶﾞｷﾞｸﾞｹﾞｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾊﾟﾋﾞﾋﾟﾌﾞﾌﾟﾍﾞﾍﾟﾎﾞﾎﾟｳﾞｧｱｨｲｩｳｪｴｫｵｶｷｸｹｺｻｼｽｾｿﾀﾁｯﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓｬﾔｭﾕｮﾖﾗﾘﾙﾚﾛﾜｦﾝ｡｢｣､･ｰﾞﾟ');

        element.triggerHandler('change');

        expect(element.val()).toBe('ガギグゲゴザジズゼゾダヂヅデドバパビピブプベペボポヴァアィイゥウェエォオカキクケコサシスセソタチッツテトナニヌネノハヒフヘホマミムメモャヤュユョヨラリルレロワヲン。「」、・ー゛゜');
    });

    it('convert half-width kana to full-width', function() {
        var element = $compile('<input type="text" ng-convert-jp>')($rootScope);

        element.val('ｶﾞｶﾞｶﾞ');

        element.triggerHandler('change');

        expect(element.val()).toBe('ガガガ');
    });
});