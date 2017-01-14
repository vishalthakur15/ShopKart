var cardName = document.getElementById('card-name');
var cardNumber = document.getElementById('card-number');
var cardExpiration = document.getElementById('expiration');

cardName.onkeyup = function(){
    document.getElementById('card-name-display').innerHTML = cardName.value;
}

cardNumber.onkeyup = function(){
    document.getElementById('card-number-display').innerHTML = cardNumber.value;
}

cardExpiration.onkeyup = function(){
    //Splts up expiration date
    var expirationDisplay = (cardExpiration.value).slice(0,2);
    expirationDisplay += "/" + (cardExpiration.value).slice(2,4);
   document.getElementById('expiration-display').innerHTML = expirationDisplay;
}