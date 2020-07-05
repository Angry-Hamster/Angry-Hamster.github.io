const btnsorting = document.querySelector('.Sorting');
const block = document.querySelector('.block');
btnsorting.addEventListener('click', function(event){
if(block.classList.contains("hide")){
    block.classList.remove("hide");
}else{
    block.classList.add("hide");
}
});

// add list

const BtnAddTask = document.querySelector('.Add-Task');
BtnAddTask.addEventListener('click', function(){

    let list = document.querySelector('.Lists');
    
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

    list.insertAdjacentHTML('beforeend', `

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

`);

    let BtnDisableList = document.querySelectorAll('.plas');
    BtnDisableList.forEach(item =>{
        item.addEventListener('click', function(){
            item.parentNode.parentNode.remove()
        });
    });

});

// sorting
let DateFrom = document.querySelector('.DateFrom');
let DateTo = document.querySelector('.DateTo');

const sorting = function(date, select1, time, select2){
    date.forEach(item =>{
        let order = 0;
        
        item.value.split(select1).forEach((items, i) =>{
            if(i==1){
                items = Number(items)*25
            }else if(i==2){
                items = Number(items)*1000
            }
            order += Number(items);
        });
        item.parentNode.parentNode.parentNode.parentNode.style.order = order*10000;    
    });

    time.forEach(items =>{
        let order = 0;
        items.value.split(select2).forEach((item, i) =>{
            
            if(i == 0){
                item * 100
            }
            order = Number(item);
        });
        items.parentNode.parentNode.parentNode.parentNode.style.order += order;
    });
}

DateFrom.addEventListener('click', function(){
    let date = document.querySelectorAll('.date-from');
    let time = document.querySelectorAll('.time-from');
    sorting(date, " . " ,time, " : ")
});
DateTo.addEventListener('click', function(){
    let date = document.querySelectorAll('.date-to');
    let time = document.querySelectorAll('.time-to');
    sorting(date, "-",time, ":")
});
