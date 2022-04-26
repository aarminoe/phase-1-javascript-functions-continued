// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!` 
}

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(string = '*') {
    
    const inner = function (wrap = 'special') {
        return `You are ${string}${wrap}${string}!`
    }
    return inner
}