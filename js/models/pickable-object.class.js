class PickableObject extends MovableObject{
    height = 50;
    width = 50;
    speed = 0;
    constructor(imagePath,x){
        super().loadImage(imagePath);
        this.x = x;
        this.y = 335;
        
        

}

}