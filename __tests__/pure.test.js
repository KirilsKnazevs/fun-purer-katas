const {removeLastNumber, raiseSalaries, updateTasks} = require ('../pure');


describe ("removeLastNumber", ()=>{

    test("Return a new array of numbers with the las one removed",()=>{

        const arr = [1,2,3,4]

        const result = removeLastNumber(arr)

        expect(result).toEqual([1,2,3])

    })

})

describe ("raiseSalaries", ()=>{

    test("sould return new object in an array with updated salary", ()=>{

        const percentage = 10

        const arr = [
            { name: "Alice", salary: 3000 },
            { name: "Bob", salary: 2000 },
            { name: "Vel", salary: 4500 },]
            
        const result = raiseSalaries(arr,percentage)
    
        expect(result).toEqual([
            { name: "Alice", salary: 3000 },
            { name: "Bob", salary: 2000 },
            { name: "Vel", salary: 4950 },])
    })


    test("Should return a new array of employees with their salary now increased by the given percentage increase", ()=>{

    const percentage = 10

    const arr = [
        { name: "Alice", salary: 3000 },
        { name: "Bob", salary: 2000 },
        { name: "Vel", salary: 4500 },]
        
    const result = raiseSalaries(arr,percentage)

    expect(result).toEqual([{ name: "Alice", salary: 3300 },
                            { name: "Bob", salary: 2200 }, 
                            { name: "Vel", salary: 4950 }])

    })

})

describe("updateTaskas",()=>{

test("Returns a new person object with a new tasks properties",()=>{

    const obj = { name: "Anat",
    tasks: ["feed Schnitzel", "Go to pottery"],
}
    const testTask = "read books"

    const testTask2 = "tidy room"

    expect(updateTasks(obj, testTask, testTask2)).toEqual({ name:"Anat",
    tasks: ["feed Schnitzel", "Go to pottery", "read books", "tidy room"]})
    

})    


})