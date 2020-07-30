class Container{
    constructor(id, height, width, blocksList){
        this.id = id;
        this.height = height;
        this.width = width;
        this.blocksList = blocksList;
        this.parentNode = document.getElementById(id);
        this.blockPositions = [[]];
    }
}