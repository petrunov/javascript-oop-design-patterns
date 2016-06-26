var singleton = (function () {
    // IIF private scope ensures there is a single instance ever
    var storedInstance

    // Also some private state for the singleton instance as well
    const firstName = 'Greg'


    // literal object that holds constructor function
    const Singleton = {
        getInstance: () => {
            if (!storedInstance) {
                storedInstance= {
                    getName: () => firstName
                }
            }
            return storedInstance
        }
    }

    return Singleton
})()

var singleInstance = singleton.getInstance()

console.log(singleInstance.getName());
