//#region cardObjects
/* Создание объектов со свойствами карт. */
var cardsClub = {
    "2":{
        "img":"img\\clubs\\2.jpg",
        "count": true,
        "comb": "clubs"
    },
    "3":{
        "img":"img\\clubs\\3.jpg",
        "count": true,
        "comb": "clubs"
    },
    "4":{
        "img":"img\\clubs\\4.jpg",
        "count": true,
        "comb": "clubs"
    },
    "6":{
        "img":"img\\clubs\\6.jpg",
        "count": true,
        "comb": "clubs"
    },
    "7":{
        "img":"img\\clubs\\7.jpg",
        "count": true,
        "comb": "clubs"
    },
    "8":{
        "img":"img\\clubs\\8.jpg",
        "count": true,
        "comb": "clubs"
    },
    "9":{
        "img":"img\\clubs\\9.jpg",
        "count": true,
        "comb": "clubs"
    },
    "10":{
        "img":"img\\clubs\\10.jpg",
        "count": true,
        "comb": "clubs"
    },
    "11":{
        "img":"img\\clubs\\11.jpg",
        "count": true,
        "comb": "clubs"
    },
}
var cardsDiam = {
    "2":{
        "img":"img\\diamonds\\2.jpg",
        "count": true,
        "comb": "diamonds"
    },
    "3":{
        "img":"img\\diamonds\\3.jpg",
        "count": true,
        "comb": "diamonds"
    },
    "4":{
        "img":"img\\diamonds\\4.jpg",
        "count": true,
        "comb": "diamonds"
    },
    "6":{
        "img":"img\\diamonds\\6.jpg",
        "count": true,
        "comb": "diamonds"
    },
    "7":{
        "img":"img\\diamonds\\7.jpg",
        "count": true,
        "comb": "diamonds"
    },
    "8":{
        "img":"img\\diamonds\\8.jpg",
        "count": true,
        "comb": "diamonds"
    },
    "9":{
        "img":"img\\diamonds\\9.jpg",
        "count": true,
        "comb": "diamonds"
    },
    "10":{
        "img":"img\\diamonds\\10.jpg",
        "count": true,
        "comb": "diamonds"
    },
    "11":{
        "img":"img\\diamonds\\11.jpg",
        "count": true,
        "comb": "diamonds"
    },
}
var cardsHear = {
    "2":{
        "img":"img\\hearts\\2.jpg",
        "count": true,
        "comb": "hearts"
    },
    "3":{
        "img":"img\\hearts\\3.jpg",
        "count": true,
        "comb": "hearts"
    },
    "4":{
        "img":"img\\hearts\\4.jpg",
        "count": true,
        "comb": "hearts"
    },
    "6":{
        "img":"img\\hearts\\6.jpg",
        "count": true,
        "comb": "hearts"
    },
    "7":{
        "img":"img\\hearts\\7.jpg",
        "count": true,
        "comb": "hearts"
    },
    "8":{
        "img":"img\\hearts\\8.jpg",
        "count": true,
        "comb": "hearts"
    },
    "9":{
        "img":"img\\hearts\\9.jpg",
        "count": true,
        "comb": "hearts"
    },
    "10":{
        "img":"img\\hearts\\10.jpg",
        "count": true,
        "comb": "hearts"
    },
    "11":{
        "img":"img\\hearts\\11.jpg",
        "count": true,
        "comb": "hearts"
    },
}
var cardsSpar = {
    "2":{
        "img":"img\\spares\\2.jpg",
        "count": true,
        "comb": "spares"
    },
    "3":{
        "img":"img\\spares\\3.jpg",
        "count": true,
        "comb": "spares"
    },
    "4":{
        "img":"img\\spares\\4.jpg",
        "count": true,
        "comb": "spares"
    },
    "6":{
        "img":"img\\spares\\6.jpg",
        "count": true,
        "comb": "spares"
    },
    "7":{
        "img":"img\\spares\\7.jpg",
        "count": true,
        "comb": "spares"
    },
    "8":{
        "img":"img\\spares\\8.jpg",
        "count": true,
        "comb": "spares"
    },
    "9":{
        "img":"img\\spares\\9.jpg",
        "count": true,
        "comb": "spares"
    },
    "10":{
        "img":"img\\spares\\10.jpg",
        "count": true,
        "comb": "spares"
    },
    "11":{
        "img":"img\\spares\\11.jpg",
        "count": true,
        "comb": "spares"
    },
}

/* Создание массива объектов с картами. */
allCardsList = [cardsClub,cardsDiam, cardsHear,cardsSpar]
//#endregion

//#region randomFunctions

/**
 * Получить случайный индекс из массива allCardsList.
 * @param allCardsList - Это список мастей всех карт, доступных для розыгрыша.
 * @returns Случайное число от 0 до длины массива.
 */
var getRandomCardListIndex = function (allCardsList) {
    return Math.floor(Math.random() * allCardsList.length)
}

/**
 * Он возвращает случайное число между min и max, но не exp (5).
 * @param [min=2] - Минимальное число, которое должно быть сгенерировано.
 * @param [max=11] - максимальное число, которое может быть сгенерировано (по умолчанию 11)
 * @param [exp=5] - номер, который вы хотите исключить
 * @returns Случайное число от 2 до 11, исключая 5.
 */
function randCardNotFive(min = 2, max = 11, exp=5) {
    var n;

    min = Math.ceil(min);
    max = Math.floor(max);

    while(true){
        if ((n = Math.floor(Math.random() * (max - min + 1)) + min) != exp) { 
            console.log(n);
            return n;
        }

    }
}

/**
 * Функция возвращает объект с двумя свойствами: img и scores.
 * @param n - Стоимость карты
 * @returns Объект с двумя свойствами: img и scores.
 */
function caseFunctionReturnImgCountAndScore(n) {
            // рандомная масть
            var randConb = getRandomCardListIndex(allCardsList)
            
            // весь список карт из рандомной масти
            var globalObj = allCardsList[randConb]

            // получение объекта карты с стоимостью [n] n = 2,3,4,6,7...
            var values = Object.values(globalObj)[n]

            /* Получение значений объекта. */
            var img = values["img"]
            var countCard = values["count"]

            var comb = values["comb"]

            /* Получение ключа объекта. */
            var scores = Object.keys(globalObj)[n]

            /* Возврат объекта с двумя свойствами: img и scores. */
            return { img, scores, countCard}
}

//#endregion

//#region getRandomCard()
/**
 * Он возвращает объект с тремя свойствами: img, scores и countCard.
 * Функция имеет локальную переменную с именем case
 * @param [count=true] - логическое значение, если оно истинно, карта будет засчитана.
 * @param [min=2] - Минимальное значение случайного числа.
 * @param [max=11] - Максимальное число, которое вы хотите сгенерировать.
 * @returns Объект со свойствами img, scores и countCard.
 */
function getRandomCard(count = true, min=2, max=11){

    var number = randCardNotFive()

    if (count) {

        switch (number) {

            case 2:
                return caseFunctionReturnImgCountAndScore(0)
            case 3:
                return caseFunctionReturnImgCountAndScore(1)
            case 4:
                return caseFunctionReturnImgCountAndScore(2)
            case 6:
                return caseFunctionReturnImgCountAndScore(3)
            case 7:
                return caseFunctionReturnImgCountAndScore(4)
            case 8:
                return caseFunctionReturnImgCountAndScore(5)
            case 9:
                return caseFunctionReturnImgCountAndScore(6)
            case 10:
                return caseFunctionReturnImgCountAndScore(7)
            case 11:
                return caseFunctionReturnImgCountAndScore(8)
        
        }   
    }

    // console.log("IMG  " + img);
    return { img, scores, countCard }
}
//#endregion

//#region forCompileHTMLArray

var compLineCardListHTML = []
var compHideLineCardListHTML = []
var userLineCardListHTML = []

/* Цикл for, который перебирает массив compLineCardList и помещает в массив compImgById. */
for (let i = 1; i < 11; i++) {
    compImgById = document.querySelector(`#cc-${i}`)

    console.log(compImgById);

    compLineCardListHTML.push(compImgById)
}

/* Цикл for, который перебирает массив compLineCardList и помещает в массив compImgById. */
for (let i = 1; i < 11; i++) {
    compHideImgById = document.querySelector(`#cc-${i}-hide`)

    console.log(compHideImgById);

    compHideLineCardListHTML.push(compHideImgById)
}

/* Цикл for, который перебирает массив userLineCardList и помещает в него userImgById. */
for (let i = 1; i < 11; i++) {
    userImgById = document.querySelector(`#uc-${i}`)

    console.log(userImgById);

    userLineCardListHTML.push(userImgById)
}

//#endregion

var userScore = 0 
var compScore = 0

/**
 * Функция принимает изображение, оценку и индекс. Затем он устанавливает источник изображения по
 * индексу для переданного изображения и добавляет оценку к переменной compScore.
 * @param img - изображение карты
 * @param score - счет только что вытянутой карты
 * @param i - индекс <img> в массиве
 */
function yieldHelperComp(img, score, i) { 
    compLineCardListHTML[i].src = img
    compScore = Number(compScore) + Number(score)
    

    console.log("Score Card: " + score)
    console.log("Score Comp: " + compScore)
}

function yieldHelperHideComp(img, i) { 
    compHideLineCardListHTML[i].src = img

    console.log("Hide Comp Card");
}


 function yieldHelperUser(img, score, i) { 
    userLineCardListHTML[i].src = img
    userScore = Number(userScore) + Number(score)

//#region Generators

    

    console.log("Score Card: " + score)
    console.log("Score User: " + userScore)
}

function* resCompHideToHTML() { 
    let img = './img/back.jpg'
    for (let i = 0; i < compHideLineCardListHTML.length; i++) {
        yield yieldHelperHideComp(img,i)
        
    }
}

function* resCompToHTML() { 

    for (let i = 0; i < compLineCardListHTML.length; i++) {
        let sourse = getRandomCard()

        let img     = sourse["img"]
        let score = sourse["scores"] 
        

        yield yieldHelperComp(img,score,i)
        
    }
}

function* resUserToHTML() { 

    for (let i = 0; i < userLineCardListHTML.length; i++) {
        let sourse = getRandomCard()

        let img     = sourse["img"]
        let score = sourse["scores"] 
        

        yield yieldHelperUser(img,score,i)
        
    }
}
//#endregion

//-------------------------Interface------------------------------

let compHideIter = resCompHideToHTML()
let compIter = resCompToHTML()

function CompStep(getRandomCard) { 
    compHideIter.next()
    compIter.next()
}

function score(){
    document.getElementById("score").innerHTML = `Your Score: ${userScore}`
    document.getElementById("score-comp").innerHTML = `Computer Score: ${compScore}`
}

var userIter = resUserToHTML()

function UserStep(getRandomCard) { 
    userIter.next()

    let chanselButton = document.querySelector(".chansel-button")

    chanselButton.style.visibility = "visible"

    score()
    CompStep(getRandomCard)
}


function StopGame(){

    let visibility = "hidden"

    let userButton = document.querySelector(".user-button")
    let reloadButton = document.querySelector(".reload-button")
    let compScoreHTML = document.querySelector(".score-comp")

    userButton.style.visibility = "hidden"
    reloadButton.style.visibility = "visible"
    compScoreHTML.style.visibility = "visible"

    for (let i = 0; i < compHideLineCardListHTML.length; i++) {
        let block = compHideLineCardListHTML[i]
        block.style.visibility = visibility
    }
    score()
    console.log(compScore, userScore);
    if ((compScore < userScore && userScore <= 21) || (compScore > userScore && compScore > 21) || (userScore == 21 && compScore > userScore)){
        let textEnd = document.querySelector(".end-text")
        textEnd.style.visibility = "visible"

        document.getElementById("end-text").innerHTML = "Вы выиграли!"
    
    } else if  (compScore == userScore){
        let textEnd = document.querySelector(".end-text")
        textEnd.style.visibility = "visible"

        document.getElementById("end-text").innerHTML = "Ничья!"
    
    } else{
        let textEnd = document.querySelector(".end-text")
        textEnd.style.visibility = "visible"

        document.getElementById("end-text").innerHTML = "Вы проиграли!"
    
    }
}




