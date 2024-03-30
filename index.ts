import inquirer from 'inquirer'
//making an atm application
//1. check balance
//2. withdraw
//3. deposit
//4. fast cash

let myBalance= 10000;
let myPin= 1234;
let pinCode = await inquirer.prompt(
   [ 
    {
    name: "Pin",
    message:"Enter your pin",
    type: "number"
    }
   ]
)
if (pinCode.Pin===myPin) {
    console.log('Correct pin!')
    let operationAns= await inquirer.prompt (
        [
            {
               name:"Operation",
               message:"Please select the action!",
               type: "list",
               choices:["withdraw", "deposit", "check balance","fast cash"]
            }
        ]
    );
    if (operationAns.Operation==="withdraw") {
        let amountAns = await inquirer.prompt(
            [
                {
                    name:"amount",
                    message:"Enter the amount to be withdrawn",
                    type:"number"
                }
            ]
        )
        if (amountAns.amount>myBalance) {
            console.log("Insufficient balance")
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`You have withdrawn ${amountAns.amount} and your new balance is ${myBalance}`)
        }
    }
    else if (operationAns.Operation==="deposit") {
        let amountAns = await inquirer.prompt(
            [
                {
                    name:"amount",
                    message:"Enter the amount to be deposited",
                    type:"number"
                }
            ]
        )
        myBalance += amountAns.amount;
        console.log(`You have deposited ${amountAns.amount} and your new balance is ${myBalance}`)
    }
    else if (operationAns.Operation==="fast cash") {
        let amountAns = await inquirer.prompt(
            [
                {
                    name:"amount",
                    message:"Enter the amount to be withdrawn",
                    type:"list",
                    choices:[500,1000,2000,5000,10000,20000]  
                }
            ]
        )
        if (amountAns.amount>myBalance) {
            console.log("Insufficient balance")
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`You have withdrawn ${amountAns.amount} and your new balance is ${myBalance}`)
        }
    }
    else if (operationAns.Operation==="check balance") {
        console.log(`Your remaining balance is ${myBalance}`)
    }
} else {
    console.log('Incorrect pin!')
}
console.log("Thank you for using our ATM!")