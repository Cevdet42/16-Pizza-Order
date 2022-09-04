document.getElementById("transbox").addEventListener("change", calculate)

function calculate(event){
    event.preventDefault();

    var pizza_price;
    var total_price;
    var beverage_price;
    pizza_price = 0;
    total_price = 0;
    beverage_price = 0;

    if(document.getElementById("Mixed").checked) 
    pizza_price = document.getElementById("Mixed").value;
    else
    pizza_price = document.getElementById("Vegeterian").value


    if(document.getElementById("oneandahalfportion").checked)
    pizza_price = pizza_price * 1.5;


    if(document.getElementById("drink").checked)
    beverage_price = document.getElementById("drink").value;

    total_price = parseInt(pizza_price) + parseInt(beverage_price);

    document.getElementById("result").innerHTML = total_price + "€"

    console.log(pizza_price);


}