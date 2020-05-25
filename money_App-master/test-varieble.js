
let massive = [ 
    spend = document.createElement("input"),
    spendsum = document.createElement("input"),
    ];
spend.classList.add("enter_costname");
spendsum.classList.add("enter_costsum");
fec.append(spend);
fec.append(spendsum);
spend.placeholder = "Стаття витрaт";
spendsum.placeholder = "Сума";
let plus = document.querySelector(".add-cost"),
    input = document.getElementById("#number"),
    total = 0,
    kd = 0;
    bring = 0;
    broung = 0;
plus.addEventListener("click", function () {
let spend = document.createElement("input"),
    spendsum = document.createElement("input");
    spend.classList.add("enter_costname");
    spend.classList.add("added");
    spendsum.classList.add("added");
    spendsum.classList.add("enter_costsum");
    spend.placeholder = "Стаття витрaт";
    spendsum.placeholder = "Сума";
    fec.append(spend);
    fec.append(spendsum);

});
let addBotton = document.querySelectorAll(".s2_costs-btn"),
    form = document.querySelector(".form_enter-costs"),
    okBotton = document.querySelector(".send-costs"),
    allSite = document.querySelector(".form"),
    target; 


addBotton.forEach(function (item) {
  item.addEventListener("click", function () {

    allSite.classList.remove("hide");
    form.style.display = "flex";
    allSite.style.alignItems = "center";
    allSite.style.justifyContent = "center";
    target = event.target;
  })
});    

okBotton.addEventListener("click", function () {
    let broke = document.createElement("span"),
        brokename = document.createElement("span"),
        li = document.createElement("li"),
        img = document.createElement("img"),
        inputs = document.querySelectorAll(".added");     
      
      broke.classList.add("sp");
      brokename.classList.add("forCloseIcon");
      li.classList.add("spnd");
      img.classList.add("delete");
      li.append(brokename);
      li.append(broke);
      li.append(img);
      li.style.flexDirection = "row";
      img.src = "./img/close-24px.svg";
    
     if (target.classList.contains("main")) {
        ulon = document.querySelector(".mainCosts-list");
        ulon.append(li);
        broke.innerHTML = spendsum.value + " uah";
        brokename.innerHTML = spend.value;
        form.classList.add("hide");
        allSite.classList.add("hide");
   
      } else {
        ul = document.querySelector(".additCosts-list");
        ul.append(li);
        broke.innerHTML = spendsum.value + " uah";
        brokename.innerHTML = spend.value;

      }
      form.classList.add("hide");
      allSite.classList.add("hide");
      spend.value = "";
      spendsum.value = "";
      fec.onclick = function (event) {
        if (event.target.className != "send-costs") return;

        let pand = event.target.closest(".added");
        pand.remove();
      };   
  });