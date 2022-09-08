function removeLastNumber(arr){

const newArr = arr.slice(0,-1)

return newArr
}

function raiseSalaries(arr,percentage){

let total = ((arr[2].salary/100) * percentage)

let newArr = [...arr]

for (i = 0; i < total.length; i++){
    return newArr[i].salary + total
}
}

function updateTasks(person, ...tasks){
    if (Object.keys(person).length === 0 || tasks[0].length === 0){
        return person
    }

    const personCopy = {...person}
    const tasksCopy = [...personCopy.tasks]
    delete personCopy.tasks

    personCopy.tasks = tasksCopy.concat(tasks)
    
    return personCopy
}


module.exports = {removeLastNumber, raiseSalaries, updateTasks};