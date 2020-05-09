// functions
function stopDefAction(evt) {
    evt.preventDefault();
};

function InputsValue(let, value){
    let.forEach((item) => {
        item.value = value
    });
};

// part nuber 1 роблю збір данних з inputs
let inputsBasiIncome = document.querySelectorAll(".inputsBasiIncome");
inputsBasiIncome.forEach((item, i) => {
    item.addEventListener('input',function(){console.log(item.value, i);});
});

// part nuber 2 роблю з формою
let form = document.querySelector(".form_enter-costs");
form.style.display = "none";

let buttonCosts = document.querySelectorAll(".s2_costs-btn");
buttonCosts.forEach((item, i) => {
        item.addEventListener('click', function() {
        console.log('buttonCosts',i);
        form.style.display = "flex";

        let enter_costname = document.querySelectorAll(".enter_costname"),
            enter_costsum = document.querySelectorAll(".enter_costsum");

        InputsValue(enter_costname, '');
        InputsValue(enter_costsum, '');
    });
});

let mainCosts = document.querySelector(".mainCosts"),
    additionalCosts = document.querySelector(".additionalCosts");
let counter = 0;

let AddCost = document.querySelectorAll(".add-cost");
AddCost.forEach((item) => {
    item.addEventListener('click', function() {
        let formCosts = document.querySelector(".form_costs"),
            htmlCode = '<div class="form_costs_chiilds"><input class="enter_costname" type="text" name="" id="" placeholder="Стаття витрат" /><input class="enter_costsum" type="text" name="" id="" placeholder="Сума" /> </div>';
        formCosts.insertAdjacentHTML('beforeEnd', htmlCode);
        counter++
    });
});

document.querySelector('.add-cost').addEventListener(
    'click', stopDefAction, false
);

// порправити багулю з кнопкою на формі
// .forCloseIcon
// costs

let enter_costname = document.querySelectorAll(".enter_costname"),
    enter_costsum = document.querySelectorAll(".enter_costsum");

let costsMain = document.querySelector('.costs-main'),
    costsAdditional = document.querySelector('.costs-Additional');

document.querySelector('.send-costs').addEventListener(
    'click', stopDefAction, false
);

let btn = document.querySelector(".send-costs");
btn.addEventListener('click', function() {
    
    for(let i=0; i<=counter; i++){
        

    };

    form.style.display = "none";
// навигація
    let nav = document.querySelector('.s2_costs');
    nav.scrollIntoView({
        behavior: 'smooth',
        block: 'center'    
    });

    for(let i=0; i<counter; i++){
        let form_chiild = document.querySelector('.form_costs_chiilds');
        form_chiild.remove();
    };
});

   

