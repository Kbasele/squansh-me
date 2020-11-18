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
                head[hole].style.animation ="jumpUp1 1.4s ease"
    
                setTimeout(()=>{ 
                    head[hole].style.removeProperty("animation")
                }, 1400);
                }, 1400);
        }, 6000);
        
    }

    hole(){
        return Math.floor((Math.random() * 6) + 0);
    }

    smack(){
        const head = document.querySelectorAll(".img")
        
        for(let current of head){
            let count = 0
            window.addEventListener("click", (e)=>{
                if(e.target === current) {
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

        element.style.display ="none"
        number.style.display ="none"
    }

    visible(){
        const element = document.querySelector(".wrapper")
        const number = document.querySelector(".countDown h1")

        number.style.display ="block"
        element.style.display ="grid"

    }

    buttonClick(){
        document.querySelector("#landing-page button").addEventListener("click", ()=>{
            this.shrinkButton()
            setTimeout(() => {
                this.visible()
                new face()

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
        }, 2000);


        
    }

}