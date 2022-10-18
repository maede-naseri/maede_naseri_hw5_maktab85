const obj= {
    step: 0,
    increase() {
        return this.step += 1
    },
    decrease() {
        return this.step -= 1
    },
    reset() {
     return this.step

    },
    read() {
        let length = 0;
        for( let key in obj ) {
            if( obj.hasOwnProperty(key) ) {
                ++length;
            }
        }
        console.log(length)
    }

}
console.log(obj.increase())
console.log(obj.increase())
console.log(obj.increase())
console.log(obj.decrease())
console.log(obj.reset())
obj.read()