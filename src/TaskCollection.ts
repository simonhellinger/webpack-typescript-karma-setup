export default class TaskCollection {

    constructor(public tasks:Array<String> = []) {}

    dump() {
        console.log(this.tasks);
    }
}