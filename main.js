
class Shape{
    #shapeName
    constructor(shapeName){
        this.#shapeName = shapeName
    }
    get Area(){

    }
    get Mohit(){

    }
    get getShapeName(){
        return this.#shapeName
    }
    set setShapeName(shapeName){
        this.#shapeName = shapeName
    }
}

class Polygon extends Shape {
    #width
    #height
    constructor(shapeName,width,height){
        super(shapeName)
        this.#width = width
        this.#height = height
    }
    set setWidht(width){
        this.#width = width
    }
    get getWidth(){
        return this.#width
    }
    set setHeight(height){
        this.#height = height
    }
    get getHight(){
        return this.#height
    }
    get Area(){
        return this.#width * this.#height
    }
    get Mohit(){
        return (this.#width + this.#height) * 2
    }
}


class NonPolygon extends Shape{
    #radius
    constructor(shapeName,radius){
        super(shapeName)
        this.#radius = radius
    }
    get getRadius(){
        return this.#radius
    }
    set setRadius(radius){
        this.#radius = radius
    }
    get Area(){
        return this.#radius * this.#radius * Math.PI
    }
    get Mohit(){
        return 2 * Math.PI * this.#radius
    }
}


class RectAngle extends Polygon{}

class Square extends Polygon {
    constructor(shapeName,width){
        super(shapeName,width,width)
    }
}

class Circle extends NonPolygon{}

class Cylindrical extends Circle{
    #height
    constructor(shapeName,radius,height){
        super(shapeName,radius)
        this.#height = height
    }
    set setHeight(height){
        this.#height = height
    }
    get getHeight(){
        return this.#height
    }
    get Area(){
        return super.Mohit * this.#height
    }
    get Mohit(){
        return super.Area * this.#height
    }
}

const shapes = document.getElementById('shapes');
const width = document.getElementById('width');
const height = document.getElementById('height');
const radius = document.getElementById('radius');
const perimeter = document.getElementById('perimeter');
const area = document.getElementById('area')
radius.disabled = true
const body = document.getElementsByTagName('body')[0]

body.addEventListener('change', event => {
    event.preventDefault();
    let shapesValue = shapes.options[shapes.selectedIndex].value;

    if (shapesValue === 'circle') {
        width.value = ""
        height.value = ""
        height.disabled = true;
        width.disabled = true;
        radius.disabled = false;
        
        const circle = new Circle('Circle',Number(radius.value))
        perimeter.innerHTML = circle.Mohit
        area.innerHTML = circle.Area
    } else if (shapesValue === 'squid') {
        radius.value = ""
        height.value = ""
        height.disabled = true;
        width.disabled = false;
        radius.disabled = true;
        const squid = new Square('Square',Number(width.value))
        perimeter.innerHTML = squid.Mohit
        area.innerHTML = squid.Area
    } else if (shapesValue === 'rectangle') {
        radius.value = ""
        height.disabled = false;
        width.disabled = false;
        radius.disabled = true;
        const rect = new RectAngle('RectAngle',Number(width.value),Number(height.value))
        perimeter.innerHTML = rect.Mohit
        area.innerHTML = rect.Area
    }
});
