let datems = new Date();

window.dayOfMonth= datems.getDate();
window.tomonth= datems.getMonth()+1;
window.year= datems.getFullYear();

if(dayOfMonth <10){
    dayOfMonth = '0' + dayOfMonth
}
if(tomonth <10){
    tomonth = '0' + tomonth
}
window.list =`

    <div class="list">
        <div class="name">
            <input class="input-name" type="text" placeholder="Name of task">
            <batton class="plas" onmousedown="return false">+</batton>
        </div>
        <div class="info">
            <input class="input-date date-from" type="text" value="${dayOfMonth} ${"."} ${tomonth} ${"."} ${year}">
            <input class="input-date date-to" type="date" placeholder="Date to">

        </div>
        <div class="task">
            <textarea class="input-task" placeholder="Task"></textarea>
        </div>
    </div>

`;


