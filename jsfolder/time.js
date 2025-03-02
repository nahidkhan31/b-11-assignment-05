
const date = new Date();
const hours = date.getHours() % 12|| 12; 
const ampm = date.getHours() >= 12 ? 'PM': 'AM';
const minute = date.getMinutes();

const days =[
  'Sunday',
  'Monday',
  'Tuesday',
  "Wednesday",
  "Thusday",
  "Friday",
  "Saturday",
];

const currentDayName = days[new Date().getDate()];
const currentTime = `${hours}:${minute} ${ampm}`;

const div = document.createElement('div')
div.innerHTML=`
<div>
<p class="text-2xl font-">${currentDayName}</p class=>
<h1  class="text-2xl font-medium">${currentTime}</h1>
</div>
`;
