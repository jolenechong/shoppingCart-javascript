
// let cart = []
// let totalPrice = 0

// function addToCart(item,price) {
//     // alert(item+" added to Cart!")
//     // totalPrice += price
//     document.getElementById("viewCart").innerHTML=cart.length +1
//     var itemNPrice = {}
//     itemNPrice.price = price
//     itemNPrice.item = item
//     console.log(itemNPrice)
//     return cart.push(itemNPrice)
// }

// function removeFromCart(name){
//     for(var item in cart){
//         if (cart[item].name === name){
//             cart.pop(item)
//         }
//     }
// }

// function viewCart(){
//     document.getElementById("popupCart").style.display="";

//     if( cart != []){
//         console.log("hewo"+cart[0].item)
//         saveCart()
//         console.log("hi")
//     }
// }

// function saveCart(){
//     // document.getElementById("popupCart").style.display=""
//     // document.getElementById("items").innerHTML = ""

//         for(i=0;i<cart.length;i++){
//             var li = document.createElement("LI")
//             console.log("this here"+cart[i].item)

//             var item  = document.createTextNode(cart[i].item)
//             var price = document.createTextNode(cart[i].price)
//             var button = document.createElement("button")
//             button.type = 'button';
//             button.innerHTML = 'X';
//             button.className = 'removeItem';
//             button.value = i
//             // console.log(button.value)
//             // console.log(button.innerText)

//             // button.onclick = function(){
//             //     var index = this.cart[i]["item"].indexOf()
//             //     cart.splice(index)
//             //     console.log(cart)
//             //     viewCart()
//             // }
                    
//             li.appendChild(item)
//             li.appendChild(price)
//             li.appendChild(button)
//             document.getElementById("items").appendChild(li)
//             totalPrice += cart[i]["price"]
        
//         }
//         document.getElementById("totalPrice").innerHTML= "$"+totalPrice
//         var close = document.getElementsByClassName("removeItem");
//         // var itemval = close[1].value;
//         // alert("item val ="+itemval);
//         var i;
//         for (i = 0; i < close.length; i++) {
//             // console.log("here"+close[i].value)
//             // cart.splice(close[i].value)
//             // var itemval = close[i].value
        
//             close[i].onclick = function() {
//                 var div = this.parentElement;
//                 div.style.display = "none";
//                 var val = this.value;
//                 // alert(val)
//                 // // Herererere remove the cart[itemval] .... if possible
//                 // console.log("heres"+close[i].value)


//                 // console.log(cart[0,1]["item"])
//                 var endd = []
//                 for (i = 0; i < close.length; i++) {
//                     var end = cart[i].item
//                     console.log(end)
//                     endd.push(end)
//                 }
//                 console.log(endd)

//                 alert(endd[val])
//                 function checkValue(value){
//                     return value != endd[val]
//                 }

                
//                 productsLeft = endd.filter(checkValue)
//                 console.log(productsLeft);
//                 document.getElementById("viewCart").innerHTML=cart.length -1

//                 for (i = 0; i < close.length; i++){
//                     if(cart[i].item != productsLeft){
//                         delete cart[i]
//                         // const index = cart.indexOf(cart[i])
//                         // cart.splice(index,1)
//                         function removeNull(array) {
//                             return array.filter(x => x !== null)
//                             };
//                         console.log(removeNull(cart))
//                     }
//                 }

//         }
//         console.log(cart)
//         }
        
//     }

cart = []
totalPrice = 0
addNew = false

function addToCart(price,item) {
    itemNprice = {"price":price,"item":item}
    console.log(itemNprice)
    cart.push(itemNprice)
    console.log(cart)
    addNew = true
    document.getElementById("viewCart").innerHTML=cart.length
}
function saveCart() {
    addNew = false
}

function viewCart(){
    if(addNew == true){
        document.getElementById("items").innerHTML = ""
        document.getElementById("popupCart").style.display=""
        totalPrice = 0
        addNew = false
        for(i=0;i<cart.length;i++){
            var li = document.createElement("LI")

            var item  = document.createTextNode(cart[i].item)
            var price = document.createTextNode(cart[i].price)
            var node = document.createTextNode(" $")
            var button = document.createElement("button")
            button.type = 'button';
            button.innerHTML = 'X';
            button.className = 'removeItem';
            button.value = i
                    
            li.appendChild(item)
            li.appendChild(node)
            li.appendChild(price)
            li.appendChild(button)
            document.getElementById("items").appendChild(li)
            totalPrice += cart[i].price
            document.getElementById("priceHere").innerHTML = totalPrice
        
        }    

        var close = document.getElementsByClassName("removeItem");
        var i;
            for (i = 0; i < close.length; i++) {

            
                close[i].onclick = function() {
                    var div = this.parentElement;
                    div.style.display = "none";
                    var val = this.value;

                    var endd = []
                    for (i = 0; i < close.length; i++) {
                        var end = cart[i].item
                        console.log(end)
                        endd.push(end)
                    }
                    console.log(endd)
                    function checkValue(value){
                        return value != endd[val]
                    }

                    
                    productsLeft = endd.filter(checkValue)
                    productsLeft = productsLeft.toString()
                    console.log(productsLeft);

                    document.getElementById("viewCart").innerHTML=cart.length -1
                    console.log(cart)

                    for (i = 0; i < close.length; i++){
                        if(cart[i].item != productsLeft){
                            totalPrice = totalPrice - cart[i].price
                            document.getElementById("priceHere").innerHTML = totalPrice

                            delete cart[i]
                            
                            console.log(removeNull(cart))
                            cart = removeNull(cart)
                        }
                    }

                }
            }
    }else{
    alert("Your cart is empty.")
}

}

function removeNull(array) {
    return array.filter(x => x !== null)
};


function closePopup(){
    document.getElementById("popupCart").style.display="none"
}

function clearCart(){
    cart = []
    totalPrice = 0

    document.getElementById("items").innerHTML = ""
    document.getElementById("priceHere").innerHTML= +totalPrice
    document.getElementById("viewCart").innerHTML=0
}