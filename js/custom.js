function getbill(){
    var fName = foodName.options[foodName.selectedIndex].text;
    var fPrice = parseInt(foodName.options[foodName.selectedIndex].value);
    var fNumber = parseInt(document.getElementById("foodNumber").value);
    var fDiscount = foodDiscount.options[foodDiscount.selectedIndex].text;
    var fDiscountper = parseInt(foodDiscount.options[foodDiscount.selectedIndex].value);

    document.getElementById("showFname").innerText = fName;
    document.getElementById("showPrice").innerText = fPrice;   
    document.getElementById("showQuantity").innerText = fNumber;
    document.getElementById("showDiscount").innerText = fDiscount;

    var foodPriceamt = fPrice * fNumber;
    var totalAmount = (foodPriceamt * fDiscountper) / 100;
    var finalAmount = foodPriceamt - totalAmount;

    document.getElementById("showFoodamt").innerText = finalAmount;

}

$(document).ready(function(){
    $("#generateBill").click(function(){
        $("#foodTip").css({"display":"block"});
    });
});