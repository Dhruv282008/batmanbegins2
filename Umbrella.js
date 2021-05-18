class Umbrella {
    constructor(x, y, radius){
        var options= {
            isStatic: true
        }
        this.body = Bodies.circle(x, y,radius,options)
        this.image = loadAnimation("Walking Frame/walking_1.png", "Walking Frame/walking_2.png", 
        "Walking Frame/walking_3.png", "Walking Frame/walking_4.png", "Walking Frame/walking_5.png",
        "Walking Frame/walking_6.png", "Walking Frame/walking_7.png", "Walking Frame/walking_8.png")
        World.add(world, this.body)

    }
    display(){
       
        push()
        //translate(this.body.position.x, this.body.position.y)
        imageMode(CENTER)
        animation(this.image, this.body.position.x,this.body.position.y, 150, 150)
        pop()
        console.log(this.image)
    }
}