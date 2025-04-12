


let allcloths=[];
function addanycloths(id,imgUrl,username,price,button1,button2){
  let addcloths= {
    id:id,
    imgUrl:imgUrl,
    username:username,
    price:price,
    addbutton:button1,
    buybutton:button2,
  };
  allcloths.push(addcloths);
  return addcloths;
}


addanycloths(2651,"../images/blueshirt.webp"," men blue shirt","1,499","add to cart","buy now");
addanycloths(2652,"../images/greenshirt.webp","men green shirt","1,299","add to cart","buy now");
addanycloths(2653,"../images/red shirt.webp","men red shirt","1,499","add to cart","buy now");
addanycloths(2654,"../images/blackshirt.webp","men black shirt","1,499","add to cart","buy now");
addanycloths(2655,"../images/shopping.webp"," men brown cargo","2,000","add to cart","buy now");
addanycloths(2663,"../images/menpantgray.webp","men formal grey pant","2,999","add to cart","buy now");
addanycloths(2656,"../images/blackpant.webp","men black pant","1,799","add to cart","buy now");
addanycloths(2657,"../images/women (1).webp", "ladys saree", "2,999","add to cart","buy button");
addanycloths(2658,"../images/women(2).webp"," ladys green saree","2,599","add to cart","buy now");
addanycloths(2659,"../images/blackshoe.webp","men black shoes","3,499","add to cart","buy now");
addanycloths(2660,"../images/casualshoes.webp","men casual shoes","2,399","add to cart","buy now");
addanycloths(2661,"../images/sandel.webp","ladys sandels","1,999","add to cart","buy now");
addanycloths(2662,"../images/heelswomen.webp"," ladys heels","2,999","add to cart","buy now");
addanycloths(2663,"../images/kid5.webp","kid's boy outfit","1,699","add to cart","buy now");
addanycloths(2664,"../images/kids1.webp","kid's full dress","999","add to cart","buy now");
addanycloths(2665,"../images/kids2.webp","kid's boy shirt","399","add to cart","buy now");
addanycloths(2666,"../images/kids3.webp","kid's  t-shirt","699","add to cart","buy now");
addanycloths(2667,"../images/kids4.webp","kid's t-shirt","799","add to cart","buy now");
addanycloths(2668,"../images/kids6.webp","kid's boy blazzer","599","add to cart","buy now");
addanycloths(2669,"../images/kidg3.webp","kid's girls outfit","899","add to cart","buy now");
addanycloths(2670,"../images/kidsg4.webp","kid's grils top","999","add to cart","buy now");
addanycloths(2671,"../images/kidg1.webp","kid's grils dress","1,499","add to cart","buy now");
addanycloths(2672,"../images/kidsg3.webp","kid's girls pinkdress","1,099","add to cart","buy now");
addanycloths(2673,"../images/kidg2.webp","kid's grils outfit","1,699","add to cart","buy now");

let iteams=document.getElementsByClassName("newly-added-items")[0];

iteams.innerHTML = allcloths
  .map((item) => {
    return `<div class="new-product">
              <img src="${item.imgUrl}" alt="${item.id}">
              <p>${item.username}</p>
              <p>₹${item.price}</p>
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
      const orderId= allcloths.find((item)=>item.id==productId);
     if (orderId){
      
      Ordereditems.push(orderId);
      const sizeOfOrder = Ordereditems.length-1;
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
const matchingproduct=allcloths.filter(item=>item.username===text);
if(matchingproduct.length>0){
iteams.innerHTML=matchingproduct.map((item)=>{
   return `<div class="new-product">
              <img src="${item.imgUrl}" alt="${item.id}">
              <p>${item.username}</p>
              <p>₹${item.price}</p>
              <p class="cart-button">${item.addbutton}</p>
              <p class="buy-button" data-id="${item.id}">${item.buybutton}</p>
            </div>  `;
})
.join("");
}else{
  iteams.innerHTML=`<p id="stock-over">no items found!<p>`;
  
}
});
const menclothsbtn =document.getElementsByClassName("men-cloths")[0];
const men = "men";
menclothsbtn.addEventListener("click", function(){
const checkmatchwords = allcloths.filter(item =>item.username.includes(men));
if(checkmatchwords<allcloths){
iteams.innerHTML=checkmatchwords.map((item)=>{
  return `<div class="new-product">
             <img src="${item.imgUrl}" alt="${item.id}">
             <p>${item.username}</p>
             <p>₹${item.price}</p>
             <p class="cart-button">${item.addbutton}</p>
             <p class="buy-button" data-id="${item.id}">${item.buybutton}</p>
           </div>  `;
})
.join("");
}else{
  iteams.innerHTML=`<p id="stock-over">out of stock need some time<p>!`;
}
});

const womenclothsbtn =document.getElementsByClassName("women-cloths")[0];
const women = "ladys";
womenclothsbtn.addEventListener("click",function(){
const matchwordlady = allcloths.filter(item => item.username.toLowerCase().includes(women));
if(matchwordlady<allcloths){
  iteams.innerHTML=matchwordlady.map((item)=>{
    return `<div class="new-product">
               <img src="${item.imgUrl}" alt="${item.id}">
               <p>${item.username}</p>
               <p>₹${item.price}</p>
               <p class="cart-button">${item.addbutton}</p>
               <p class="buy-button" data-id="${item.id}">${item.buybutton}</p>
             </div>  `;
 })
 .join("");
}else{
  iteams.innerHTML=`<p id="stock-over">out of stock need some time!<p>`;
}
});

const kidsclothsbtn =document.getElementsByClassName("kids-cloths")[0];
const kids="kid's";
kidsclothsbtn.addEventListener("click",function(){
  const kidsmatchingcloths =allcloths.filter(item =>item.username.toLowerCase().includes(kids));
  if(kidsmatchingcloths<allcloths){
    iteams.innerHTML=kidsmatchingcloths.map((item)=>{
      return `<div class="new-product">
                 <img src="${item.imgUrl}" alt="${item.id}">
                 <p>${item.username}</p>
                 <p>₹${item.price}</p>
                 <p class="cart-button">${item.addbutton}</p>
                 <p class="buy-button" data-id="${item.id}">${item.buybutton}</p>
               </div>  `;
   })
   .join("");
  }else{
    iteams.innerHTML=`<p id="stock-over">out of stock need some time!<p>`;
  }
  });

  const allclothsbtn =document.getElementsByClassName("all-cloths");
  allcloths.addEventListener("click",function(){
    menclothsbtn.removeEventListener("click");
  });