function Hero(image, top, left, size) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;"  alt=""/>';
    };

    this.moveRight = function () {
        this.left += 20;
        console.log('left: ' + this.left);
    };
    this.moveDown = function () {
        this.top += 20;
        console.log('top: ' + this.top);
    };
    this.moveLeft = function () {
        this.left -= 20;
        console.log('left: ' + this.left);
    };
    this.moveUp = function () {
        this.top -= 20;
    }
}

var hero = new Hero('goku.png', 20, 30, 200);

function start() {
    if (hero.top === 20 && hero.left < window.innerWidth - hero.size) {
        hero.moveRight();
    }
    if (hero.left === 1170 && hero.top < window.innerHeight - hero.size) {
        hero.moveDown();
    }
    if (hero.top === 440 && hero.left > 0) {
        hero.moveLeft();
    }
    if (hero.top > 0 && hero.left === 30) {
        hero.moveUp();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 50)
}

start();