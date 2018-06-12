class Person {
    constructor(name) {
        this.name = name;
    }
    talk(text) {
        return`${this.name} says: ${text}`;
    }
}
class SuperGyro extends Person {
    constructor(name, superpower){
        super(name);
        this.superpower = superpower
    }
    saySuperPower(){
        return this.talk(`My superpower is: ${this.superpower}`)
    }
}
export default SuperGyro;