document.addEventListener("DOMContentLoaded", () => {
    new face()
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
        for(let current of head){
            current.addEventListener("click", (e)=>{
                console.log("click")
            })
        }
    }
}