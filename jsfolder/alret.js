function getInnerTextById(id){
    const number = document.getElementById(id).innerText;
    const convertedNumber = parseFloat(number);
    return convertedNumber;
}


document.getElementById('final-btn').addEventListener('click', function(event){
          event.preventDefault;
          document.getElementById('activity').style.display = "none";
          

})