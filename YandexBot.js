// ==UserScript==
// @name         Ya_bot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Bot for yandex
// @author       MarinaLukina
// @match        https://yandex.ru/*
// @match        https://ya.ru/*
// @match        https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai/*
// @grant        none
// ==/UserScript==

let keywords = ["как звучит флейта", "как звучит тромбон"];
let keyword = keywords[getRandom(0,keywords.length)];
let btnYa = document.getElementsByClassName("button mini-suggest__button button_theme_search button_size_search i-bem button_js_inited")[0];
let links = document.links;

let yandexInput = document.getElementsByName("text")[0];

if (btnYa !== null && btnYa!== undefined) {
    let i = 0;
    let timerId = setInterval(()=>{
        yandexInput.value += keyword[i];
        i++;
        if (i == keyword.length) {
            clearInterval(timerId);
            btnYa.click();
        }
    },500);
}else if(location.hostname =='xn----7sbab5aqcbiddtdj1e1g.xn--p1ai'){
    setInterval(()=>{
        let index = getRandom(0, links.length);
        if(getRandom(0,101) >= 80)
        {
            location.href = "https://yandex.ru";
        }
        if (links[index].href.indexOf("xn----7sbab5aqcbiddtdj1e1g.xn--p1ai") !== -1)
            links[index].click();}, getRandom(1000, 5000));
} else{
    let nextYandexPage = true;
    for(let i =0; i<links.length; i++){
        if (links[i].href.includes("xn----7sbab5aqcbiddtdj1e1g.xn--p1ai")){
            let link = links[i];
            nextYandexPage = false;
            setTimeout(()=>{link.click();},getRandom(3000,7000));
            console.log("Нашел строку" + links[i]);
            break;
        }
    }
    if (document.querySelector('[aria-label="Текущая страница 5"]')){
        nextYandexPage = false;
        location.href = "https://yandex.ru";
    }
    if (nextYandexPage) {
        setTimeout(()=>{document.querySelector('[aria-label="Следующая страница"]').click();},getRandom(2000,6000));
    }
}
function getRandom(min,max) {
    return Math.floor(Math.random()*(max-min)+min)
}
