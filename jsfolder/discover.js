document.getElementById('color-code').addEventListener('click', function(event){
   event.preventDefault;
   document.body.style.backgroundColor = allColor();
})









document.getElementById('discover-btn').addEventListener('click',function(event){
         event.preventDefault;
         window.location.href="./index2.html";
})

// function formateDate(date) {
//     const days=["Sun", "Mon", "Tue", "Wed", "Thu", "Fri","Sat"];
//     const months=["Janu", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct","Nov", "Dec"];
//    return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;
// }

// setInterval(() => {
//      const now = new Date();

//      dateElement.textContent = formateDate (now);
// }, 200);

 function formatDate(date){
     const daysMonthYear = {
          weekday: 'short', year: 'numeric', month: "short", day: 'numeric'
     };
     return date.toLocaleDateString('en-US', daysMonthYear);
 }

document.getElementById('date').innerText = formatDate(new Date());

// btn section

document.getElementById('com-btn').addEventListener('click', function(event){
    const number= getInnerTextById('number');
    const mainNumber = getInnerTextById('main-number');
    const cardTitle= document.getElementById('card-title-1');
          event.preventDefault;
   if(number!==isNaN || mainNumber!==isNaN){
      const total = number - 1;
      const sum = mainNumber + 1;
      document.getElementById("number").innerText=total;
      document.getElementById('main-number').innerText=sum;

     const activity = document.getElementById('activity');
     const div =document.createElement("div");
     div.innerHTML =` <div class="p-2 bg-slate-200 mx-2 my-3 rounded-md">
              <p class ="p-2">You have completed <span class="text-blue-500 font-semibold">${cardTitle}</span> at ${currentTime}</p>
           </div>`
     activity.appendChild(div)
     document.getElementById('activity').style.display = "block";
     document.getElementById("com-btn").disabled = true;

      alert("Board update Successfully");

   }
})
// second btn
document.getElementById('com2-btn').addEventListener('click', function(event){
    const number= getInnerTextById('number');
    const mainNumber = getInnerTextById('main-number');
    const cardTitle1= document.getElementById('card-title-2');
          event.preventDefault;
   if(number!==isNaN || mainNumber!==isNaN){
      const total = number - 1;
      const sum = mainNumber + 1;
      document.getElementById("number").innerText=total;
      document.getElementById('main-number').innerText=sum;

     const activity = document.getElementById('activity');
     const div =document.createElement("div");
     div.innerHTML =`<div class="p-2 bg-slate-200 mx-2 my-3 rounded-md">
              <p class ="p-2">You have completed <span class="text-blue-500 font-semibold">${cardTitle1}</span> at ${currentTime}</p>
           </div>`
     activity.appendChild(div)

     document.getElementById('activity').style.display = "block";
     document.getElementById("com2-btn").disabled = true;

      alert("Board update Successfully");
   }
})

document.getElementById('com3-btn').addEventListener('click', function(event){
   const number= getInnerTextById('number');
   const mainNumber = getInnerTextById('main-number');
   const cardTitle1= document.getElementById('card-title-3');
         event.preventDefault;
  if(number!==isNaN || mainNumber!==isNaN){
     const total = number - 1;
     const sum = mainNumber + 1;
     document.getElementById("number").innerText=total;
     document.getElementById('main-number').innerText=sum;

     const activity = document.getElementById('activity');
     const div =document.createElement("div");
     div.innerHTML =`<div class="p-2 bg-slate-200 mx-2 my-3 rounded-md">
              <p class ="p-2">You have completed <span class="text-blue-500 font-semibold">${cardTitle1}</span> at ${currentTime}</p>
           </div>`
     activity.appendChild(div)

    document.getElementById('activity').style.display = "block";
    document.getElementById("com3-btn").disabled = true;

     alert("Board update Successfully");
  }
})

document.getElementById('com4-btn').addEventListener('click', function(event){
   const number= getInnerTextById('number');
   const mainNumber = getInnerTextById('main-number');
         event.preventDefault;
  if(number!==isNaN || mainNumber!==isNaN){
     const total = number - 1;
     const sum = mainNumber + 1;
     document.getElementById("number").innerText=total;
     document.getElementById('main-number').innerText=sum;
    
     const cardTitle1= document.getElementById('card-title-4');
     const activity = document.getElementById('activity');
     const div =document.createElement("div");
     div.innerHTML =`<div class="p-2 bg-slate-200 mx-2 my-3 rounded-md">
              <p class ="p-2">You have completed <span class="text-blue-500 font-semibold">${cardTitle1}</span> at ${currentTime}</p>
           </div>`
     activity.appendChild(div)


    document.getElementById('activity').style.display = "block";
    document.getElementById("com4-btn").disabled = true;

     alert("Board update Successfully");
  }
})

document.getElementById('com5-btn').addEventListener('click', function(event){
   const number= getInnerTextById('number');
   const mainNumber = getInnerTextById('main-number');
         event.preventDefault;
  if(number!==isNaN || mainNumber!==isNaN){
     const total = number - 1;
     const sum = mainNumber + 1;
     document.getElementById("number").innerText=total;
     document.getElementById('main-number').innerText=sum;

     const cardTitle1= document.getElementById('card-title-5');
     const activity = document.getElementById('activity');
     const div =document.createElement("div");
     div.innerHTML =`<div class="p-2 bg-slate-200 mx-2 my-3 rounded-md">
              <p class ="p-2">You have completed <span class="text-blue-500 font-semibold">${cardTitle1}</span> at ${currentTime}</p>
           </div>`
     activity.appendChild(div)

    document.getElementById('activity').style.display = "block";
    document.getElementById("com5-btn").disabled = true;

     alert("Board update Successfully");
  }
})

document.getElementById('com6-btn').addEventListener('click', function(event){
   const number= getInnerTextById('number');
   const mainNumber = getInnerTextById('main-number');
         event.preventDefault;
  if(number!==isNaN || mainNumber!==isNaN){
     const total = number - 1;
     const sum = mainNumber + 1;
     document.getElementById("number").innerText=total;
     document.getElementById('main-number').innerText=sum;

     const cardTitle1= document.getElementById('card-title-6');
     const activity = document.getElementById('activity');
     const div =document.createElement("div");
     div.innerHTML =`<div class="p-2 bg-slate-200 mx-2 my-3 rounded-md">
              <p class ="p-2">You have completed <span class="text-blue-500 font-semibold">${cardTitle1}</span> at ${currentTime}</p>
           </div>`
     activity.appendChild(div)


    document.getElementById('activity').style.display = "block";
    document.getElementById("com6-btn").disabled = true;

     alert("Board update Successfully");
     alert("Congratulation!!! You have completed all the current task")  
  }
  
})





