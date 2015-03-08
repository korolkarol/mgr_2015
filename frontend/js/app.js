/**
 * Created by Karol on 2015-03-07.
 */
var app = angular.module('myApp', ['pascalprecht.translate']);

app.config(function($translateProvider){
    $translateProvider.translations('pl', {
        TITILE: 'Projekt MoGames',
        POWERED_BY: 'Stworzone przy użyciu',
        HOME: 'Strona główna',
        LANGUAGE: 'Język'
    }).translations('en', {
        TITILE: 'Project MoGames',
        POWERED_BY: 'Powered by',
        HOME: 'Home',
        LANGUAGE: 'Language'
    });
    $translateProvider.preferredLanguage('pl');
});