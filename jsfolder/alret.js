function getInnerTextById(id){
    const number = document.getElementById(id).innerText;
    const convertedNumber = parseFloat(number);
    return convertedNumber;
}