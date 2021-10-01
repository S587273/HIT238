class Product{
    constructor(name,description,pic,price){
        this.name = name;
        this.description = description;
        this.pic = pic
        this.price= price
    }
}

var product1 = new Product("Bitcoin was invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto. The currency began use in 2009 when its implementation was released as open-source software.Bitcoins are created as a reward for a process known as mining. They can be exchanged for other currencies, products, and services",859,"bitcoin.jpg",true);
var product2 = new Product("Dogecoin features the face of the Shiba Inu dog from the 'Doge' meme as its logo and namesake.It was introduced on December 6, 2013, and quickly developed its own online community, reaching a market capitalization of over $85 billion on May 5, 2021.",539,"Dogecoin.jpg",true);
var product3 = new Product("Ethereum was conceived in 2013 by programmer Vitalik Buterin, and went live on 30 July 2015.",1249,"ethereum.jpg",true);
var productlist = [product1,product2,product3]
var taglist = ["tag1","tag2","tag3"]
var piclist = ["bitcoin","Dogecoin","ethereum"]

function index()
{
    for(var i=0; productlist.length;i++){
    document.getElementById(taglist[i]).innerHTML=
    "<h3>"+productlist[i].name+"</h3><br>"+
    "<p>"+productlist[i].description+"</p><br>"+
    "<p>$"+productlist[i].price+"</p><br>";
    document.getElementById(piclist[i]).src=productlist[i].pic;
}
}

function accountinfo()
{
    
    for(var i=0; productlist.length;i++){
      if(productlist[i].accountinfo==true){
        productprice=productlist[i].price*.9
        document.getElementById(taglist[i]).innerHTML=
        "<h3>"+productlist[i].name+"</h3><br>"+
        "<p>"+productlist[i].description+"</p><br>"+
        "<p>Special $"+Math.ceil(productprice)+"</p><br>";
        document.getElementById(piclist[i]).src=productlist[i].pic;
}
}
}

function formValidation() {
    var uname = document.registration.username; {}
        }                return false;


function allLetter(uname) {
    var letters = /^[A-Za-z]+$/;
    if (uname.value.match(letters)) {
        return true;
    }
    else {
        alert('Username must have alphabet characters only');
        uname.focus();
        return false;
    }
}


function allnumeric(uphone) {
    var numbers = /^[0-9]+$/;
    if (uphone.value <1 (uphone)) {
        return true;
    }
    else {
        alert ("Enter Country Code");
        uphone.focus();
        return false;
    }

}

function passid_validation(passid, mx, my) {
    var passid_len = passid.value.length;
    if (passid_len == 0 || passid_len >= my || passid_len < mx) {
        alert("Password should not be empty / length be between " + mx + " to " + my);
        passid.focus();
        return false;
    }
    return true;
}
