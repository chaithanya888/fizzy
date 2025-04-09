


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
addanycloths(2651,"../images/blueshirt.webp","blue shirt","1,499","add to cart","buy now");
addanycloths(2652,"../images/greenshirt.webp","green shirt","1,299","add to cart","buy now");
addanycloths(2653,"../images/red shirt.webp","red shirt","1,499","add to cart","buy now");
addanycloths(2654,"../images/blackshirt.webp","black shirt","1,499","add to cart","buy now");
addanycloths(2655,"../images/shopping.webp","brown cargo","2,000","add to cart","buy now");
addanycloths(2663,"../images/menpantgray.webp","formal grey pant","2,999","add to cart","buy now");
addanycloths(2656,"../images/blackpant.webp","black pant","1,799","add to cart","buy now");
addanycloths(2657,"../images/women (1).webp", "women saree", "2,999","add to cart","buy button");
addanycloths(2658,"../images/women(2).webp","green saree","2,599","add to cart","buy now");
addanycloths(2659,"../images/blackshoe.webp","black shoes","3,499","add to cart","buy now");
addanycloths(2660,"../images/casualshoes.webp","men casual shoes","2,399","add to cart","buy now");
addanycloths(2661,"../images/sandel.webp","women sandels","1,999","add to cart","buy now");
addanycloths(2662,"../images/heelswomen.webp","women heels","2,999","add to cart","buy now");

let iteams=document.getElementsByClassName("newly-added-items")[0];
iteams.innerHTML = womencloths
  .map((item) => {
    return `<div class="new-product">
              <img src="${item.imgUrl}" alt="${item.id}">
              <p>${item.username}</p>
              <p>${item.price}</p>
              <p class="cart-button">${item.addbutton}</p>
              <p class="buy-button" data-id="${item.id}">${item.buybutton}</p>
            </div>  `;
  })
  .join("");



let Quantity = document.getElementsByClassName("quantity-shower")[0];
let value = parseInt(document.getElementsByClassName("items"))||0;
const buttons = document.querySelectorAll(".cart-button");
buttons.forEach(button => {
  button.addEventListener("click", function () {
    
      value++;
      Quantity.innerHTML=`<span>${value}</span>`;    
      console.log(`Added ${value} to cart`);
    }
  );

});

const buybutton = document.querySelectorAll(".buy-button");
Ordereditems=[];
buybutton.forEach(function(button) {
  button.addEventListener("click",function () {
      const productId = this.getAttribute("data-id");
      const orderId= womencloths.find((item)=>item.id==productId);
     if (orderId){
      
      Ordereditems.push(orderId);
      const index= Ordereditems.length-1;
      console.log("ordered product!");
     }else{

      console.log("Ordered not placede error!");
     }

    });
});

const inputvalue =document.getElementsByClassName("search-product")[0];
const searchbtn = document.getElementsByClassName("searching")[0];
searchbtn.addEventListener("click",()=>{
  let text=inputvalue.value.toLowerCase();
const matchingproduct=womencloths.filter(item=>item.username===text);
if(matchingproduct.length>0){
iteams.innerHTML=matchingproduct.map((item)=>{
   return `<div class="new-product">
              <img src="${item.imgUrl}" alt="${item.id}">
              <p>${item.username}</p>
              <p>${item.price}</p>
              <p class="cart-button">${item.addbutton}</p>
              <p class="buy-button" data-id="${item.id}">${item.buybutton}</p>
            </div>  `;
})
.join("");
}else{
  iteams.innerHTML=`<p id="stock-over">no items found!<p>`;
  
}
});
const allbutton =document.getElementsByClassName("all-products");
