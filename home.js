document.getElementById('add-money').addEventListener('click',function(event){
    event.preventDefault();
    const inputAddMoney = parseFloat(document.getElementById('input-add-money').value);
    const inputPinNumber = document.getElementById('input-pin').value;
    if(inputPinNumber === '1234'){
        const balance = parseFloat(document.getElementById('balance').innerText);
        const newBalance = (balance + inputAddMoney);
        document.getElementById('balance').innerText = newBalance;
        console.log( newBalance)
    }
    else{
        alert('wrong pin number')
    }
})