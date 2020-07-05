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
    
    list.insertAdjacentHTML('beforeend', window.list)

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

const sorting = function(date, select, time){
    date.forEach(item =>{
        let order = 0;
        
        item.value.split(select).forEach((items, i) =>{
            if(i==1){
                items = Number(items)*25
            }else if(i==2){
                items = Number(items)*1000
            }
            order += Number(items);
        });
        item.parentNode.parentNode.parentNode.parentNode.style.order = order;    
    });

    // time.forEach(item =>{
        
    // });
}

DateFrom.addEventListener('click', function(){
    let date = document.querySelectorAll('.date-from');
    let time = document.querySelectorAll('.time-from');
    sorting(date, " . " ,time)
});
DateTo.addEventListener('click', function(){
    let date = document.querySelectorAll('.date-to');
    sorting(date, "-")
});
