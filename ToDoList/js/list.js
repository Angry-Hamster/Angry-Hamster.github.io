let datems = new Date();

let dayOfMonth= datems.getDate(),
    tomonth= datems.getMonth()+1,
    year= datems.getFullYear(),
    timeHours= datems.getHours(),
    timeMinut= datems.getMinutes();

if(dayOfMonth <10){
    dayOfMonth = '0' + dayOfMonth
}
if(tomonth <10){
    tomonth = '0' + tomonth
}
if(timeMinut <10){
    timeMinut = '0' + timeMinut
}
window.list =`

    <div class="list">
        <div class="name">
            <input class="input-name" type="text" placeholder="Name of task">
            <batton class="plas" onmousedown="return false">+</batton>
        </div>
        <div class="info">
            <div class="perent-for-date">
                <label for="from" class="lable">Дата створення</label>
                <div class="perent">
                    <input class="input-date date-from" id="from" type="text" value="${dayOfMonth} ${"."} ${tomonth} ${"."} ${year}" readonly>
                    <input class="input-clock time-from" type="text" value="${timeHours} ${":"} ${timeMinut}" readonly>
                </div>
            </div>
            <div class="perent-for-date">
                <label for="to" class="lable">Дата завершення</label>
                <div class="perent">
                    <input class="input-date date-to" id="to" type="date" placeholder="Date to"></input>
                    <input class="input-clock time-to" type="time" value="time">
                </div>    
            </div>
        </div>
        <div class="task">
            <textarea class="input-task" placeholder="Task"></textarea>
        </div>
    </div>

`;



