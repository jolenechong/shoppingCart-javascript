cart = []
totalPrice = 0
addNew = false 

function addToCart(price,item) {
    itemNprice = {"price":price,"item":item} //adding price and item name to an object
    console.log(itemNprice)
    cart.push(itemNprice) //push each object into array called cart
    console.log(cart)
    addNew = true //so that when viewCart() is called it will add these values
    document.getElementById("viewCart").innerHTML=cart.length
}
function saveCart() {
    addNew = false
}

function viewCart(){
    if(addNew == true){
        document.getElementById("items").innerHTML = "" //clear items in cart
        document.getElementById("popupCart").style.display="" //display cart popup

        totalPrice = 0
        addNew = false
        
        for(i=0;i<cart.length;i++){ //creating a new li for each item added from addToCart()
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
        
        closeIt() //what happens when clicking  X button
        
    }else{
    document.getElementById("popupCart").style.display="" //display popup even if there's nothing new to add
}
}

function closeIt(){
    var close = document.getElementsByClassName("removeItem");
    var i;
    for (i = 0; i < close.length; i++) {
    
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none"; //display none for the item clicked
            var val = this.value; //getting value of button

            var endd = []
            for (i = 0; i < close.length; i++) {//push all item name to endd array
                var end = cart[i].item
                console.log(end)
                endd.push(end)
            }

            console.log(endd)//shows an array of all the current fuds, before deleting

            function checkValue(value){
                return value != endd[val]
            }

            
            productsLeft = endd.filter(checkValue) //filters away all items with same value as the  one clicked
            
            // productsLeft = productsLeft.toString()
            console.log("products left"+productsLeft);

            document.getElementById("viewCart").innerHTML=cart.length -1
            console.log(cart)

            for (i = 0; i < close.length; i++){
                if(cart[i].item != productsLeft[i]){
                    totalPrice = totalPrice - cart[i].price
                    document.getElementById("priceHere").innerHTML = totalPrice

                    delete cart[i] //deleting the items, leaves null
                    
                    console.log(removeNull(cart))
                    cart = removeNull(cart) //removing null
                }else{
                    console.log("nothing")
                }
            }

        }
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
