export class Team {
    constructor() {
        this.members = new Set();
    }
    add(character) {
        if (this.members.has(character)) {
            throw new Error('такой объект уже существует в команде')
        } else {
            this.members.add(character)
        }
    }
    addAll(...character){
        character.forEach((item) => {
            this.members.add(item)    
        })
    }
    toArray(){
        return [...this.members]
    }
}