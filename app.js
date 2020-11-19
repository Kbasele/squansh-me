document.addEventListener("DOMContentLoaded", () => {
    new hammer()
    new page()
})

class face{
    constructor(){
        this.jumpUp()
        this.smack()

    }

    jumpUp(){
        const head = document.querySelectorAll(".img")
        setTimeout(()=>{ 
            setInterval(()=>{
                const hole =  this.hole()
                head[hole].style.animation ="jumpUp1 1.2s ease"
    
                setTimeout(()=>{ 
                    head[hole].style.removeProperty("animation")
                }, 1200);
                }, 1200);
        }, 6000);
        
    }

    hole(){
        return Math.floor((Math.random() * 6) + 0);
    }

    smack(){
        const head = document.querySelectorAll(".img")
        let scoreElement = document.querySelector(".score h1")
        
        let score = 0; 
        for(let current of head){
            let count = 0
            window.addEventListener("click", (e)=>{
                if(e.target === current) {
                    score++
                    scoreElement.innerHTML =score
                    count++ 
                    console.log(count)
                    if(count==1){
                        current.style.background=`url("/pictures/kevinsad.png") no-repeat`
                        current.style.backgroundSize="100%"
                        current.style.width="150px"
                    }
                    if(count==2){
                        current.style.background=`url("/pictures/kevinmad.png") no-repeat`
                        current.style.backgroundSize="100%"
                        current.style.width="150px"
                    }
                }
            })
        }
    }
}

class hammer{
    constructor(){
        this.mouse()

    }

    mouse(){
        window.addEventListener("mousemove", this.moveHammer)
        window.addEventListener("click", this.slamHammer)

    }
    moveHammer(e){
        const hammer = document.querySelector("#hammer")

        hammer.style.top = e.pageY + "px";
        hammer.style.left = e.pageX + "px";

    }

    slamHammer(){
        const hammer = document.querySelector("#hammer")

        hammer.style.animation ="slam 0.14s ease"
            setTimeout(() => {
                hammer.style.removeProperty("animation")
            }, 140);
    }

}

class page{
    
    constructor(){
        this.hide()
        this.buttonClick()
        this.countDown()
    }

    hide(){
        const element = document.querySelector(".wrapper")
        const number = document.querySelector(".countDown h1")
        const timer = document.querySelector(".timer")
        const endScore = document.querySelector(".endScore h1")
        const againButton = document.querySelector(".button")

        element.style.display ="none"
        number.style.display ="none"
        timer.style.display ="none"
        endScore.style.display ="none"
        againButton.style.display ="none"
    }

    visible(){
        const element = document.querySelector(".wrapper")
        const number = document.querySelector(".countDown h1")
        const timer = document.querySelector(".timer")

        number.style.display ="block"
        element.style.display ="grid"
        timer.style.display ="inline-block"


    }

    buttonClick(){
        document.querySelector("#landing-page button").addEventListener("click", ()=>{
            this.shrinkButton()
            setTimeout(() => {
                this.visible()
                new face()
                setTimeout(this.timer, 5000);


            }, 2000);

        })
        
    }

    shrinkButton(){
        let button = document.querySelector("#landing-page button")
        let header = document.querySelector(".squansh-text")
        button.style.animation ="shrink 0.7s ease forwards"



        setTimeout(function(){
            button.style.removeProperty("animation")
            button.style.display ="none"

            header.style.animation ="swipe 1.3s ease forwards"
            setTimeout(() => {
                header.style.removeProperty("animation")
                header.style.display ="none"
            }, 1000);
        }, 700);
    }

    countDown(){
        const number = document.querySelector(".countDown h1")
        let count = 3; 
        
        setTimeout(() => {
            const myInterval = setInterval(()=>{
                number.innerHTML =count
                --count
                if(count == -1){
                    number.innerHTML ="GO"
                }
                if(count == -1){
                    clearInterval(myInterval);
                    setTimeout(()=>{ 
                        number.style.animation="swipe 1.3s ease"
                        
                    }, 1000);
                    setTimeout(()=>{                     
                        number.style.display="none"
                        number.style.visible="hidden"
                    }, 2000);
                }    
            }, 1000);
        }, 3000);


        
    }

    timer(){
        const timer = document.querySelector(".timer")
        let second = 20; 
        let mSecond = 100;  

        setInterval(() => {
            mSecond -=10
            if(mSecond == 0){
                mSecond = 100
                --second
            }
            timer.innerHTML=second

            if(second == 0){
                const element = document.querySelector(".wrapper")
                const number = document.querySelector(".countDown h1")
                const timer = document.querySelector(".timer")
                const endScore = document.querySelector(".endScore h2")
                const score = document.querySelector(".score h1")
                const againButton = document.querySelector(".button")
                
                endScore.style.display="inline-block"
                endScore.innerHTML = `You squashed me ${score.innerHTML} times`
                againButton.style.display ="block"
             
                score.style.display ="none"
                element.style.display ="none"
                number.style.display ="none"
                timer.style.display ="none"
                
            }
        }, 100);
    }
}