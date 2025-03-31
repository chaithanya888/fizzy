let womencloths=[];
function addanycloths(id,imgUrl,username,price,button1,button2){
  let addcloths= {
    id:id,
    imgUrl:imgUrl,
    username:username,
    price:price,
    addbutton:button1,
    buybutton:button2,
  };
  womencloths.push(addcloths);
  return addcloths;
}
addanycloths(2661,"../images/women (1).webp", "women saree", "2,999","add to cart","buy button");
addanycloths(2662,"../images/women(2).webp","green saree","2,599","add to cart","buy now");
let iteams=document.getElementsByClassName("newly-added-items")[0];
iteams.innerHTML = womencloths
  .map((item) => {
    return `<div class="list-items">
              <img src="${item.imgUrl}" alt="${item.id}">
              <p>${item.username}</p>
              <p>${item.price}</p>
              <p class="cart-button">${item.addbutton}</p>
              <p class="buy-button">${item.buybutton}</p>
            </div>  `;
  })
  .join("");



// let items = document.getElementsByClassName("quantity-shower")[0];
// let value = parseInt(document.getElementsByClassName("items"))||0;
// const buttons = document.querySelectorAll(".cart-button");
// buttons.forEach(button => {
//   button.addEventListener("click", function () {
    
//       value++;
//       items.innerHTML=`<span>${value}</span>`;    
//       console.log(`Added ${value} to cart`);
//     }
//   );

// });
