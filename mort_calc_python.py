import sys

monthPay = 0
monthIntRate = 0
totalIntPaid = 0

loanAmt = int(input("Enter loan amount: "))
nbrMonths = int(input("Enter loan term (months): "))
intRate = float(input("Enter interest rate: "))

if intRate > 1:
    intRate = intRate / 100

monthIntRate = intRate / 12

remainBal = 0
monthCounter = 1 

monthPay = int(round(loanAmt * ((monthIntRate * (1 + monthIntRate) ** nbrMonths) / ((1 + monthIntRate) ** nbrMonths - 1 ) ) ) )
print ('\n\nMonthly Payment Amount: {}'.format(int(round(monthPay))) + '\n')

print (' Mo  MoPay  MoPrinPd  MoIntPd  TotalIntPd  RemainBal \n\n')

while (monthCounter <= nbrMonths):
    prevMonthBal = int(round(loanAmt * (((1 + monthIntRate) ** nbrMonths - (1 + monthIntRate) ** (monthCounter - 1)) / ((1 + monthIntRate) ** nbrMonths - 1))))
    remainBal = int(round(loanAmt * (((1 + monthIntRate) ** nbrMonths - (1 + monthIntRate) ** monthCounter) / ((1 + monthIntRate) ** nbrMonths - 1))))
    monthPrinPaid = prevMonthBal - remainBal
    monthIntPaid = monthPay - monthPrinPaid
    totalIntPaid += monthIntPaid
    #print ('{}  {} \t {} \t {} \t {} \t {} '.format(monthCounter,monthPay,monthPrinPaid,monthIntPaid,totalIntPaid,remainBal))
    print (str(monthCounter).center(3,' ') + '  ' + str(monthPay).center(5,' ') + '  ' +
            str(monthPrinPaid).center(8,' ') +  '  ' + str(monthIntPaid).center(7, ' ') + '  ' +
            str(totalIntPaid).center(10,' ') + '  ' + str(remainBal).center(9,' ') )
    monthCounter += 1

sys.exit()
