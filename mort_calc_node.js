
// https://www.mtgprofessor.com/formulas.htm

const util = require('node:util');

console.log('Testing JavaScript Program');

const loanAmt = 150000
const nbrMonths = 180
const intRate = 0.05

let monthPay = 0
let monthIntRate = 0
let totalIntPaid = 0

monthIntRate = intRate  / 12

let prevMonthBal = 0
let remainBal = 0
let monthCounter = 0
let monthPrinPaid = 0
let monthIntPaid = 0

monthPay = Math.round(loanAmt * (monthIntRate * Math.pow((1 + monthIntRate), nbrMonths)) / (Math.pow((1 + monthIntRate),nbrMonths) - 1 ) ) 
console.log('Testing monthPay: ' + monthPay + '\n\n')

console.log(' Mo  MoPay  MoPrinPd  MoIntPd  TotalIntPd  RemainBal \n')

for (monthCounter = 1; monthCounter <= nbrMonths; monthCounter++) {
  prevMonthBal = 
    Math.round(
      loanAmt
      * ( Math.pow((1 + monthIntRate),nbrMonths) - Math.pow((1 + monthIntRate), (monthCounter - 1)) ) 
      / ( Math.pow((1 + monthIntRate),nbrMonths) - 1 ) 
    )
  // console.log('\ncounter: ' + monthCounter + '\tprevMonthBal: ' + prevMonthBal)
  remainBal = 
    Math.round(
      loanAmt 
      * ( Math.pow((1 + monthIntRate),nbrMonths) - Math.pow((1 + monthIntRate), monthCounter)) 
      / ( Math.pow((1 + monthIntRate),nbrMonths) - 1 )  
    )
  // console.log('couner: ' + monthCounter + '\tremainBal: ' + remainBal)
  monthPrinPaid = prevMonthBal - remainBal
  monthIntPaid = monthPay - monthPrinPaid
  totalIntPaid = totalIntPaid + monthIntPaid
  //console.log(monthCounter + '\t' + monthPay + '\t' + monthPrinPaid + '\t' + monthIntPaid + '\t' + totalIntPaid + '\t' + remainBal)
  console.log(util.format("%s%s%s%s%s%s",
                          monthCounter.toString().padStart(3),
                          monthPay.toString().padStart(7),
                          monthPrinPaid.toString().padStart(7),
                          monthIntPaid.toString().padStart(9),
                          totalIntPaid.toString().padStart(12),
                          remainBal.toString().padStart(12) ) 
  )

}



