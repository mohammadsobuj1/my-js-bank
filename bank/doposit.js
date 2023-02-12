document.getElementById('dipo-btn').addEventListener('click', function(){
   const inputDposite = document.getElementById('diposit-feild');
   const tottalDipositeString = inputDposite.value;

   const tottalDiposite = parseFloat(tottalDipositeString);
   inputDposite.value = '';
if(isNaN(tottalDiposite)){
   alert('provide a Number ')
   return;
}

   const dipositeAmount = document.getElementById('dipo-amount')
   const newAmountstring = dipositeAmount.innerText;
   const newAmount = parseFloat(newAmountstring);
   const updateDiposite = newAmount+tottalDiposite;

    dipositeAmount.innerText = updateDiposite;

  const totalBlance= document.getElementById('total-blance')
const newBlanceString = totalBlance.innerText;
const updateBlance = parseFloat(newBlanceString);
const newAdd =updateBlance + tottalDiposite ;

totalBlance.innerText = newAdd;
   
})