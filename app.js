document.addEventListener("DOMContentLoaded", () => {
    new face()
    new hammer()
})

class face{
    constructor(){
        this.jumpUp()
        this.smack()

    }

    jumpUp(){
        const head = document.querySelectorAll(".img")
        
        setInterval(()=>{
            const hole =  this.hole()

            head[hole].classList.add("jumpUp1")
            setTimeout(()=>{ 
                head[hole].classList.remove("jumpUp1")
            }, 1500);
            }, 1500);
    }

    hole(){
        return Math.floor((Math.random() * 6) + 0);
    }

    smack(){
        const head = document.querySelectorAll(".img")
        const wrapper = document.querySelector(".wrapper")
        
        for(let current of head){
            let count = 0
            wrapper.addEventListener("click", (e)=>{
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
        const wrapper = document.querySelector(".wrapper")

        wrapper.addEventListener("mousemove", this.moveHammer)
        window.addEventListener("click", this.slamHammer)

        

    }
    moveHammer(e){
        const stretch = 100;
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