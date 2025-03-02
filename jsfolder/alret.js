function getInnerTextById(id){
    const number = document.getElementById(id).innerText;
    const convertedNumber = parseFloat(number);
    return convertedNumber;
}


document.getElementById('final-btn').addEventListener('click', function(event){
          event.preventDefault;
          document.getElementById('activity').style.display = "none";
          

})



 function allColor(){
   const colorCode= '0123456789ABCDEF';
   let color = "#";
   for (let i=0; i<6; i++){
    color += colorCode[Math.floor(Math.random()*16)];
   }
     return color;
 }




