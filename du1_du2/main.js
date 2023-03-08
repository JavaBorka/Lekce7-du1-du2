// CVIČENÍ 1

/*
const salary = (wage, hours, days) => {
    const hrubaMesicniMzda = wage * hours * days
    return hrubaMesicniMzda
}

const taxed = (salary, percentage) => {
    const zdaneni = salary * percentage/100
    return zdaneni
}

const wage = 220
const hours = 8
const days = 20

const hrubaMzda = salary(wage, hours, days)
const zdaneni = taxed(hrubaMzda, 15)
const cistaMzda = hrubaMzda - zdaneni

console.log(cistaMzda)
console.log('mame vypocet')

document.body.innerHTML = `
    <p>Mzda: ${wage} Kč/1 hodina</p>
    <p>Počet odpracovaných hodin: ${hours} hodin/ 1 den</p>
    <p>Počet odpracovaných dní: ${days} dní/ 1 měsíc</p>
    <p>Mzda před zdaněním: ${hrubaMzda} Kč</p>
    <p>Mzda po zdanění: ${cistaMzda}</p>
`
}
*/

// CVIČENÍ 2


const calculate = (number1, operation, number2) => {
    if (operation === '+') {
        const result = number1 + number2
        document.body.innerHTML = `
        <p>${number1} + ${number2} = ${result}</p>
        `

    } else if (operation === '-') {
        const result = number1 - number2
        document.body.innerHTML = `
        <p>${number1} - ${number2} = ${result}</p>
        `

    } else if (operation === '*') {
        result = number1 * number2
        document.body.innerHTML = `
        <p>${number1} * ${number2} = ${result}</p>
        `

    } else if (operation === '/') {
        result = number1 / number2
        document.body.innerHTML = `
        <p>${number1} / ${number2} = ${result}</p>
        `
    }
}

calculate(5, '+', 3)

// CVIČENÍ 3


