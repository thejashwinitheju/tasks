const search = () =>{
const searchbox = document.getElementById("search").value.toUpperCase();
const stores = document.getElementById("product-list");
const product = document.querySelectorAll(".hoodie");
const pname = stores.getElementById("h2");

for(var i=0; i<pname.length; i++){
match = product[i].getElementsByTagName("h2")[0];

if(match){
   let textvalue= match.textcontent || match.innerHTML

   if(textvalue.toUpperCase().indexof(searchbox) > -1){
    product[i].style.display ="";

   }else{
    product[i].style.display ="none";
   }
   
}
}
}