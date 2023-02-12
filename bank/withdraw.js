document.getElementById('withdraw-btn').addEventListener('click', function(){
const withdrawInput = document.getElementById('Widthdraw-feild');
const withdrawValuestring = withdrawInput.value;
const withdrawValue = parseFloat(withdrawValuestring);

withdrawInput.value = '';

if(isNaN(withdrawValue)){
    alert('provide a number');
    return;
}

    const newWithdraw = document.getElementById('widthdraw-amount');
    const withdrawAmountstring = newWithdraw.innerText;
    const withdrawAmount = parseFloat(withdrawAmountstring);



      
    const myWithdraw = document.getElementById('total-blance');
    const totalWithdrawstring = myWithdraw.innerText;
    const totalWithdraw = parseFloat(totalWithdrawstring);
   
    if(withdrawValue > totalWithdraw){
        alert('insaficiant Blance')
        return;
    }

    const updateWithdraw = withdrawAmount + withdrawValue;
    newWithdraw.innerText = updateWithdraw;


    const mytotalWithdraw = totalWithdraw - withdrawValue;

    myWithdraw.innerText = mytotalWithdraw;
     




    
})