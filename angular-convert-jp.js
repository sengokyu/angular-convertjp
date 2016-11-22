/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function (angular) {
    'use strict';
    
     var halfKana = [/\uff76\uff9e/g, /\uff77\uff9e/g, /\uff78\uff9e/g, /\uff79\uff9e/g, /\uff7a\uff9e/g, /\uff7b\uff9e/g, /\uff7c\uff9e/g, /\uff7d\uff9e/g, /\uff7e\uff9e/g, /\uff7f\uff9e/g, /\uff80\uff9e/g, /\uff81\uff9e/g, /\uff82\uff9e/g, /\uff83\uff9e/g, /\uff84\uff9e/g, /\uff8a\uff9e/g, /\uff8a\uff9f/g, /\uff8b\uff9e/g, /\uff8b\uff9f/g, /\uff8c\uff9e/g, /\uff8c\uff9f/g, /\uff8d\uff9e/g, /\uff8d\uff9f/g, /\uff8e\uff9e/g, /\uff8e\uff9f/g, /\uff73\uff9e/g, /\uff67/g, /\uff71/g, /\uff68/g, /\uff72/g, /\uff69/g, /\uff73/g, /\uff6a/g, /\uff74/g, /\uff6b/g, /\uff75/g, /\uff76/g, /\uff77/g, /\uff78/g, /\uff79/g, /\uff7a/g, /\uff7b/g, /\uff7c/g, /\uff7d/g, /\uff7e/g, /\uff7f/g, /\uff80/g, /\uff81/g, /\uff6f/g, /\uff82/g, /\uff83/g, /\uff84/g, /\uff85/g, /\uff86/g, /\uff87/g, /\uff88/g, /\uff89/g, /\uff8a/g, /\uff8b/g, /\uff8c/g, /\uff8d/g, /\uff8e/g, /\uff8f/g, /\uff90/g, /\uff91/g, /\uff92/g, /\uff93/g, /\uff6c/g, /\uff94/g, /\uff6d/g, /\uff95/g, /\uff6e/g, /\uff96/g, /\uff97/g, /\uff98/g, /\uff99/g, /\uff9a/g, /\uff9b/g, /\uff9c/g, /\uff66/g, /\uff9d/g, /\uff61/g, /\uff62/g, /\uff63/g, /\uff64/g, /\uff65/g, /\uff70/g, /\uff9e/g, /\uff9f/g];
     var fullKana = ['\u30ac', '\u30ae', '\u30b0', '\u30b2', '\u30b4', '\u30b6', '\u30b8', '\u30ba', '\u30bc', '\u30be', '\u30c0', '\u30c2', '\u30c5', '\u30c7', '\u30c9', '\u30d0', '\u30d1', '\u30d3', '\u30d4', '\u30d6', '\u30d7', '\u30d9', '\u30da', '\u30dc', '\u30dd', '\u30f4', '\u30a1', '\u30a2', '\u30a3', '\u30a4', '\u30a5', '\u30a6', '\u30a7', '\u30a8', '\u30a9', '\u30aa', '\u30ab', '\u30ad', '\u30af', '\u30b1', '\u30b3', '\u30b5', '\u30b7', '\u30b9', '\u30bb', '\u30bd', '\u30bf', '\u30c1', '\u30c3', '\u30c4', '\u30c6', '\u30c8', '\u30ca', '\u30cb', '\u30cc', '\u30cd', '\u30ce', '\u30cf', '\u30d2', '\u30d5', '\u30d8', '\u30db', '\u30de', '\u30df', '\u30e0', '\u30e1', '\u30e2', '\u30e3', '\u30e4', '\u30e5', '\u30e6', '\u30e7', '\u30e8', '\u30e9', '\u30ea', '\u30eb', '\u30ec', '\u30ed', '\u30ef', '\u30f2', '\u30f3', '\u3002', '\u300c', '\u300d', '\u3001', '\u30fb', '\u30fc', '\u309b', '\u309c'];
     

    /* 
     * @type type      
     * Convert functions
     * @type type
     */
    var convertFuncs = {
        /**
         * Convert Half-width Kana to Full-width
         * 
         * @param {type} word
         * @returns {undefined}
         */
        K: function (word) {
            var max = halfKana.length;
            for (var i = 0; i < max; i++) {
                word = word.replace(halfKana[i], fullKana[i]);
            }

            return word;
        },
        /**
         * Convert Full-width alphabet to Half-width
         * 
         * @param {type} word
         * @returns {undefined}
         */
        a: function (word) {
            return word.replace(/[\uff10-\uff19\uff21-\uff3a\uff41-\uff5a]/g, function (s) {
                return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
            });
        }
    };

    var convert = function (word, option) {
        var max = option.length;
        for (var i = 0; i < max; i++) {
            word = convertFuncs[option.charAt(i)](word);
        }
        return word;
    };
    
    /**
     * Convert Japanese characters to another style character.
     * 
     */
    angular.module('ngConvertJp', []).directive('ngConvertJp', [
        function () {

            return {
                strict: 'A',
                require: '?ngModel',
                link: function (scope, element, attributes, ngModel) {
                    var option = attributes['convertJp'] || 'Ka';

                    element.bind('change', function () {
                        var word = convert(element.val(), option);
                        
                        element.val(word);

                        if (ngModel) {
                            scope.$apply(function() {
                                ngModel.$setViewValue(word);
                            });
                        }

                    });
                }
            };
        }
    ]);
})(window.angular);

