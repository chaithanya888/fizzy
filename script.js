let items = document.getElementsByClassName("quantity-shower")[0];
let value = parseInt(document.getElementsByClassName("items"))||0;
const buttons = document.querySelectorAll(".cart-button");
buttons.forEach(button => {
  button.addEventListener("click", function () {
    
      value++;
      items.innerHTML=`<span>${value}</span>`;    
      console.log(`Added ${value} to cart`);
    }
  );

});