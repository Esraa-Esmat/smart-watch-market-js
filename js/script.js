var totalprice = document.querySelector("#totalprice")
var btn_cart = document.querySelectorAll("#btn-cart")
var total = 0



btn_cart.forEach(function(item){
    item.onclick = function () {
        total += +(item.getAttribute("price"))
        totalprice.innerHTML = "EGP"+total;
    }
})
