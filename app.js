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
        console.log(wrapper)
        
        for(let current of head){
            wrapper.addEventListener("click", (e)=>{
                if(e.target === current) {
                    console.log("click")}
            })
        }
    }
}

class hammer{
    constructor(){
        this.moveHammer()
    }

    moveHammer(e){
        const stretch = 100;
        const body = document.getElementsByTagName("body")
        const hammer = document.querySelector("#hammer")

        const {offsetWidth: width, offsetheight: height} = body
        let {offsetX: x, offsetY: y} = e; 

        const xStretch = Math.round((x /width * stretch) - (stretch / 2)); 
        const yStretch = Math.round((y /width * stretch) - (stretch / 2)); 

          


    }

}