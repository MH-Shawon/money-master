const errId = document.getElementById("err");

document.getElementById('calculator-btn').addEventListener('click', function(){
    
    const foodCostInput = document.getElementById('food-input');
    const FoodCostAmount = foodCostInput.value;
    const rentCostInput = document.getElementById('rent-input');
    const rentCostAmount = rentCostInput.value;
    const clothsCostInput = document.getElementById('rent-input');
    const clothsCostAmount = clothsCostInput.value;

    const incomeInput = document.getElementById('income-input');
    const incomeInputAmount = incomeInput.value;
    
    // error handling 
    if(Math.sign(parseInt(FoodCostAmount)) === -1
    || Math.sign(parseInt(rentCostAmount)) === -1 ||
    Math.sign(parseInt(clothsCostAmount)) === -1 ||
    Math.sign(parseInt(incomeInputAmount)) === -1
    ){
    errId.innerText = "Negative value is invalid"
    }
     
     
    else{
        // total expense 
        const totalExpense = document.getElementById('total-expense')
        const newTotalExpense = parseFloat(FoodCostAmount)  + parseFloat (rentCostAmount) + parseFloat (clothsCostAmount);
        totalExpense.innerText = newTotalExpense;

        
        //  balancing part 
        const balance = document.getElementById('new-balance')
        const newBalance = incomeInputAmount - newTotalExpense;
        //  console.log(balance)

        balance.innerText = parseFloat(newBalance)
    }
     
})

// savings part 
    document.getElementById('savings-btn').addEventListener('click', function(){
        const incomeInput = document.getElementById('income-input');
        const incomeInputAmount = incomeInput.value;
  
        const saveInput = document.getElementById('save-input');
    const saveInputAmount = saveInput.value;

    const totalSavings = document.getElementById('saving-amount')



    
    const newTotalSavings = (incomeInputAmount/100) * saveInputAmount
    
     totalSavings.innerText = parseInt(newTotalSavings);
    
    const remain = document.getElementById('remain-balance');

    const remainingBlnc = incomeInputAmount -  newTotalSavings;

    remain.innerText = remainingBlnc;

})
    if (saveInnerText === String){
        saveInnerText = "String is invalid"
    }
    else{
        (saveInnerText === nagetiveNumber)
        saveInnerText = "invalid Number"
        
    }
 