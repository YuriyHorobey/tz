# JavaScript testing task.

## Install

1. Install NodeJs, NPM and MongoDB according to appropriate documentation.
2. Switch to ./work/ directory
3. run: npm -g i gulp karma bower
4. run: npm install
5. run: gulp

## Database
mongod --dbpath db 

## Technologies used

### Server side:
* [NodeJs](https://nodejs.org/en/)
* [MongoDB](https://www.mongodb.org/)

### Client side:
* JavaScript
* [AngularJS](https://angularjs.org/)
* HTML5
* CSS/[SCSS](http://sass-lang.com/)

### Testing
* [Karma](https://karma-runner.github.io)
* [Jasmine](http://jasmine.github.io/)

### Build & Scaffolding
* [NPM](https://www.npmjs.com/)
* [Gulp](http://gulpjs.com/)
* [Bower](http://bower.io/), [Bower Installer](https://github.com/blittle/bower-installer)

## The task description

### Simple Chat

При открытии чата должны догружаться предыдущие сообщения, после отправки сообщения на всех открытых страницах/вкладках добавляется сообщение.
фронт:
input(name,text),button(post message).
сервер:
node,mongodb

технологии:
- nodejs
- angular
- mongodb (можно mongoose)
- bootstrap или angular-material

работать должно локально. тестироваться будет в нескольких браузерах.

как пример:[https://www.dropbox.com/s/n7ezq0s08l6wwiv/chat.png?dl=0](https://www.dropbox.com/s/n7ezq0s08l6wwiv/chat.png?dl=0)