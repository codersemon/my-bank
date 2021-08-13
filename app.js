
        // login area event handler 
        let loginBtn = document.getElementById('submit');
        loginBtn.addEventListener('click', function () {
        // Variable Declaration
        let loginContainer = document.getElementById('login-area');
        let transactionArea = document.getElementById('transaction-area');
        // Task
        loginContainer.style.display = 'none';
        transactionArea.style.display = 'block';
        document.querySelector('.login-error').style.display = 'none';
    })

    
    


    // deposit button event handler 
    let depositBtn = document.getElementById('add-deposit');

    depositBtn.addEventListener('click', function () {
        let depositAmount = document.getElementById('depositAmount').value;
        let depositNumber = parseFloat(depositAmount);
        let totalDeposit = document.getElementById('total-deposit').innerText;
        let totalDepositNumber = parseFloat(totalDeposit);

        if (depositNumber > 0) {
            let balance = document.getElementById('balance').innerText
            let balanceNumber = parseFloat(balance);

            let totalBalance = depositNumber + balanceNumber;
            let total = totalDepositNumber + depositNumber;
            
            document.getElementById('balance').innerText = totalBalance;
            document.getElementById('total-deposit').innerText = total;
            document.getElementById('depositAmount').value = '';
            document.querySelector('.blank-amount').style.display = 'none';
        }else{
            let warning = document.querySelector('.blank-amount');
            warning.style.display = 'block';
        }

    })


    // Withdraw event handler 
    const withdrawBtn = document.getElementById('withdrawBtn');
    withdrawBtn.addEventListener('click', function(){
        const withdrawAmount = document.getElementById('withdrawAmount').value;
        const withdrawAmountNumber = parseFloat(withdrawAmount);
        const totalWithdrawn = document.getElementById('totalWithdrawAmount').innerText;
        const totalWithdrawnNumber = parseFloat(totalWithdrawn);
        const balance = document.getElementById('balance').innerText;
        const balanceNumber = parseFloat(balance);

        if(withdrawAmountNumber > 0){
            if(withdrawAmountNumber <= balanceNumber){
                
            const finalTotalWithdrawn = totalWithdrawnNumber + withdrawAmountNumber;
            const finalTotalBalance = balanceNumber - withdrawAmountNumber;

            document.getElementById('totalWithdrawAmount').innerText = finalTotalWithdrawn;
            document.getElementById('balance').innerText = finalTotalBalance;

            document.getElementById('withdrawAmount').value = '';
            document.querySelector('.blank-amount-withdraw').style.display = 'none';
            document.querySelector('.insufficient-notice').style.display = 'none';
            document.getElementById('withdraw-limit').style.display = 'none';
            }else{
                document.querySelector('.insufficient-notice').style.display = 'inline-block';
                document.querySelector('.blank-amount-withdraw').style.display = 'none';
                document.getElementById('withdraw-limit-number').innerText = balanceNumber;
                document.getElementById('withdraw-limit').style.display = 'inline-block';

            }

        }else{
            document.querySelector('.blank-amount-withdraw').style.display = 'block';
        }

    })
