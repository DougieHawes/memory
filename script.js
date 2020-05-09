document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        { name: 'angular', img: 'images/angular.png' },
        { name: 'angular', img: 'images/angular.png' },
        { name: 'css', img: 'images/css.png' },
        { name: 'css', img: 'images/css.png' },
        { name: 'django', img: 'images/django.png' },
        { name: 'django', img: 'images/django.png' },
        { name: 'express', img: 'images/express.png' },
        { name: 'express', img: 'images/express.png' },
        { name: 'html', img: 'images/html.png' },
        { name: 'html', img: 'images/html.png' },
        { name: 'javascript', img: 'images/javascript.png' },
        { name: 'javascript', img: 'images/javascript.png' },
        { name: 'less', img: 'images/less.png' },
        { name: 'less', img: 'images/less.png' },
        { name: 'mongo', img: 'images/mongo.png' },
        { name: 'mongo', img: 'images/mongo.png' },
        { name: 'node', img: 'images/node.png' },
        { name: 'node', img: 'images/node.png' },
        { name: 'python', img: 'images/python.png' },
        { name: 'python', img: 'images/python.png' },
        { name: 'react', img: 'images/react.png' },
        { name: 'react', img: 'images/react.png' },
        { name: 'redux', img: 'images/redux.png' },
        { name: 'redux', img: 'images/redux.png' },
        { name: 'scss', img: 'images/scss.png' },
        { name: 'scss', img: 'images/scss.png' },
        { name: 'vue', img: 'images/vue.png' },
        { name: 'vue', img: 'images/vue.png' },
    ]

    cardArray.sort(() => .5 - Math.random())

    const grid = document.querySelector('main')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/card-back.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTwoId].setAttribute('src', 'images/white.png')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/card-back.png')
            cards[optionTwoId].setAttribute('src', 'images/card-back.png')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = '***!!congratulations!!***'
        }
    }

    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 600)
        }
    }

    createBoard()
})