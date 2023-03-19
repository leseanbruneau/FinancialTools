'use strict'

// https://www.mtgprofessor.com/formulas.htm

// node:util -> library used for text formatting
const util = require('node:util');

console.log(`\nMortgage interest calculator - just principle and interest monthly payments `);
console.log(`---------------------------------------------------------------------------\n`);

let monthPay = 0
let monthIntRate = 0
let totalIntPaid = 0

let loanAmt = 1
let nbrMonths = 1
let intRate = 0.01

const r1 = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const question1 = () => {
  return new Promise((resolve, reject) => {
    r1.question(`Enter loan amount: `, (answer) => {
      //console.log(`Loan amount is...  ${answer}`);
      loanAmt = answer
      resolve()
    })
  })
}

const question2 = () => {
  return new Promise((resolve, reject) => {
    r1.question(`Enter Number of Months: `, (answer) => {
      //console.log(`Number of Months for loan is...  ${nbrMonths}`)
      nbrMonths = answer
      resolve()
    })
  })
}

const question3 = () => {
  return new Promise((resolve, reject) => {
    r1.question(`Enter Interest Rate: `, (answer) => {
      //console.log(`Interest rate for loan is...  ${intRate}`)
      intRate = answer
      resolve()
    })
  })
}

const calcMortPayments = () => {
  monthIntRate = intRate  / 12

  let prevMonthBal = 0
  let remainBal = 0
  let monthCounter = 0
  let monthPrinPaid = 0
  let monthIntPaid = 0

  console.log(`\n--------------------------\n`);
  console.log(`Loan amount is...  ${loanAmt}`);
  console.log(`Number of Months for loan is...  ${nbrMonths}`);
  console.log(`Interest rate for loan is...  ${intRate}`);
  console.log(`\n--------------------------\n`);

  monthPay = Math.round(loanAmt * (monthIntRate * Math.pow((1 + monthIntRate), nbrMonths)) / (Math.pow((1 + monthIntRate),nbrMonths) - 1 ) ) 
  console.log('Testing monthPay: ' + monthPay + '\n\n')
  
  console.log(' Mo  MoPay  MoPrinPd  MoIntPd  TotalIntPd  RemainBal \n')

  for (monthCounter = 1; monthCounter <= nbrMonths; monthCounter++) {
    prevMonthBal = Math.round(loanAmt
      * ( Math.pow((1 + monthIntRate),nbrMonths) - Math.pow((1 + monthIntRate), (monthCounter - 1)) ) 
      / ( Math.pow((1 + monthIntRate),nbrMonths) - 1 )
    )

    remainBal = Math.round(loanAmt
      * ( Math.pow((1 + monthIntRate),nbrMonths) - Math.pow((1 + monthIntRate), monthCounter)) 
      / ( Math.pow((1 + monthIntRate),nbrMonths) - 1 )
    )

    monthPrinPaid = prevMonthBal - remainBal
    monthIntPaid = monthPay - monthPrinPaid
    totalIntPaid = totalIntPaid + monthIntPaid

    console.log(util.format("%s%s%s%s%s%s",
                          monthCounter.toString().padStart(3),
                          monthPay.toString().padStart(7),
                          monthPrinPaid.toString().padStart(7),
                          monthIntPaid.toString().padStart(9),
                          totalIntPaid.toString().padStart(12),
                          remainBal.toString().padStart(12) ) 
                )

  }
  
}

const main = async () => {
  await question1()
  await question2()
  await question3()
  await calcMortPayments()
  r1.close()
}

main()
