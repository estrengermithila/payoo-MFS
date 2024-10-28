document.getElementById('cash-money').addEventListener('click',function(event){
    event.preventDefault();
    const cashMoney = parseFloat(document.getElementById('input-cash-money').value);
    const cashPin = document.getElementById('input-cash-out-pin').value;
    if(cashPin === '1234'){
        const balance = parseFloat(document.getElementById('balance').innerText);
        const newBalance1 = (balance - cashMoney);
        document.getElementById('balance').innerText = newBalance1;
    }
    else{
        alert('Wrong pin number')
    }
})
