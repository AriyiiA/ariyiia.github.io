const texteAnime = document.getElementById('typewrite');

new Typewriter(texteAnime, {
    deleteSpeed: 10 , loop: false
    
})
.changeDelay(50)
.typeString('<span id="title">Hello, my name is Sévan Gardes</span><br>')
.pauseFor(500)
.typeString('<br>I am 22 years old and I am passionate since my youngest age about new technologies')
.deleteChars(12)
.typeString('<span style="color:white;">computer science</span>.<br>')
.pauseFor(500)
.typeString('I am currently taking a training of web and mobile <span style="color:white;">web developer</span> during 1 year.<br>')
.typeString('And I really apreciate it !')
.pauseFor(1500)
.start()
 console.log('cest ok');