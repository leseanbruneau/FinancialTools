import sys

monthPay = 0
loanAmt = 200000
nbrMonths = 180
intRate = 0.06
#loanAmt = 300000
#nbrMonths = 360
#intRate = 0.03
monthIntRate = 0
totalIntPaid = 0

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
            #str(monthPrinPaid).rjust(4,' ').ljust(8,' ') +  
            str(monthPrinPaid).center(8,' ') +  '  ' + str(monthIntPaid).center(7, ' ') + '  ' +
            str(totalIntPaid).center(10,' ') + '  ' + str(remainBal).center(9,' ') )
    monthCounter += 1

sys.exit()
