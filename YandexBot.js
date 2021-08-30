// ==UserScript==
// @name         Ya_bot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Bot for yandex
// @author       MarinaLukina
// @match        https://yandex.ru/*
// @match        https://ya.ru/*
// @grant        none
// ==/UserScript==

let keywords = ["как звучит флейта", "как звучит тромбон"];
let keyword = keywords[getRandom(0,keywords.length)];
let btnYa = document.getElementsByClassName("button mini-suggest__button button_theme_search button_size_search i-bem button_js_inited")[0];
let links = document.links;

document.getElementsByName("text")[0].value = keyword;

if (btnYa !== null && btnYa!== undefined) {
    btnYa.click();
}else{
    for (let i=0; i<links.length; i++) {
        if (links[i].href.includes('https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai/')){
            let link = links[i];
            link.click();
            break;
        }
    }
}
function getRandom(min,max) {
    return Math.floor(Math.random()*(max-min)+min)
}
