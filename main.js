const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const errorMore = $$(".error-more")
const input = $$("form input")
const circle = $$(".circle")
const next = $(".next")
const back = $(".back button")
const button = $$("button")
const planInformation = $$(".plan-information")
const optionButton = $(".option-button")
const optionText = $$(".row2 .text")
const addon = $$(".addon")
const checkBoxAddon = $$(".select-addons input")
const change = $$(".change")
const priceChange = $$(".select-plan .plan-text .price-change")
const monthFree2 = $$(".month-free-2")
const planBLock = $$(".finish .plan-block")
const addonBlock = $$(".finish .addons-block")
const span = $$(".plan-block .row-content span")
const rowPricePlan = $$(".plan-block .row-price p")
const rowPriceAddon = $$(".addons-block .row-price p")
const addonPrice = $$(".addon-price p")
const finalRowPrice = $(".final-row .row-price p")

// Callback Chung
var nextChange = function(){
    if(change[4].classList.value !== "thank change active"){
    for (let i = 0; i < circle.length; i++) {
        if(circle[i].classList.contains("active")){
            change.forEach(function(value, index){
                value.classList.remove("active")
            })
            change[i].classList.add("active")
        }
    }}
}

var planButtonChangeContent = function(){
    if(optionButton.classList.contains("active")){
        priceChange[0].innerHTML = "$90/yr"
        priceChange[1].innerHTML = "$120/yr"
        priceChange[2].innerHTML = "$150/yr"
        rowPricePlan[0].innerHTML = "$90/yr"
        rowPricePlan[1].innerHTML = "$120/yr"
        rowPricePlan[2].innerHTML = "$150/yr"
        rowPriceAddon[0].innerHTML = "+$10/yr"
        rowPriceAddon[1].innerHTML = "+$20/yr"
        rowPriceAddon[2].innerHTML = "+$20/yr"
        addonPrice[0].innerHTML = "+$10/yr"
        addonPrice[1].innerHTML = "+$20/yr"
        addonPrice[2].innerHTML = "+$20/yr"
        for (let i = 0; i < monthFree2.length; i++) {
        monthFree2[i].innerHTML = "2 months free"}
        for (let i = 0; i < span.length; i++) {
            span[i].innerHTML = "Yearly"}
} else{
        priceChange[0].innerHTML = "$9/mo"
        priceChange[1].innerHTML = "$12/mo"
        priceChange[2].innerHTML = "$15/mo"
        rowPricePlan[0].innerHTML = "$9/mo"
        rowPricePlan[1].innerHTML = "$12/mo"
        rowPricePlan[2].innerHTML = "$15/mo"
        rowPriceAddon[0].innerHTML = "+$1/mo"
        rowPriceAddon[1].innerHTML = "+$2/mo"
        rowPriceAddon[2].innerHTML = "+$2/mo"
        addonPrice[0].innerHTML = "+$1/mo"
        addonPrice[1].innerHTML = "+$2/mo"
        addonPrice[2].innerHTML = "+$2/mo"
        for (let i = 0; i < monthFree2.length; i++) {
            monthFree2[i].innerHTML = ""}
        for (let i = 0; i < span.length; i++) {
            span[i].innerHTML = "Monthly"}
}
}


// Xử lý form
input.forEach(function(valued) {
    let parent = valued.closest(".form-object")
    let more = parent.querySelector(".error-more")
    valued.onblur = function(){
        if (valued.value == ""){
            more.innerHTML = ("<label>This field is required</label>")
            parent.querySelector('input').style.borderColor = "red"
        }
    }
    valued.onclick = function(){
        if (valued.value == ""){
        parent.querySelector('input').style.borderColor = "black"
        more.innerHTML = ("")
        }
    }
})

// Xử lý nút next

document.onclick = function(){
for (let i = 0; i < circle.length; i++){
    if(circle[i].classList.contains("active")){
        if(i == 0){
        back.style.display = "none"
    }
    else if(i !== 0 && i < 3) {back.style.display = "block"}
} }
}  

// Xử lý nút back
back.onclick = function(){
    for (let i = 0; i < circle.length; i++) {
        if(circle[i].classList.contains("active") && !(i == 0)){
            circle[i].classList.remove("active")
            circle[i - 1].classList.add("active")
            break
        } else if(i == 2){
            next.innerHTML = "<button>Next Step</button>"
        }
}
    nextChange()
}

// Xử lý chọn plan
planInformation.forEach(function(value, index, array){
    
    value.onclick = function(){
        for (let i = 0; i < array.length; i++) {
            if(array[i].classList.contains("active")){
                array[i].classList.remove("active")
            }
        }
        value.classList.add("active")
    }
})



optionButton.onclick = function(){
   if(this.classList == "option-button"){
    this.classList.add("active")
    optionText[0].classList.remove("active")
    optionText[1].classList.add("active")
}
    else {
        this.classList.remove("active")
        optionText[0].classList.add("active")
        optionText[1].classList.remove("active")
    }
    planButtonChangeContent()
}

// Xử lý chọn addon
checkBoxAddon.forEach(function(value, index){
    value.onclick = function(){
    if(value.checked){
        value.closest(".addon").classList.add("active")
    } else{
        value.closest(".addon").classList.remove("active")}
}})

// Xử lý phần tính toán final

var handlePlan = function(){
    for (var i = 0; i < planInformation.length; i++){
        if(planInformation[i].classList.contains("active")){
            planBLock[i].classList.add("active")
        } else{
            planBLock[i].classList.remove("active")
        }
    }
}

var handleAddon = function(){
    for (var i = 0; i < planInformation.length; i++){
    if(addon[i].classList.contains("active")){
        addonBlock[i].classList.add("active")
    } else{
        addonBlock[i].classList.remove("active")
    }
}}

next.onclick = function(){
    if (input[0].value !== "" && input[1].value !== "" && input[2].value !== ""){
        for (let i = 0; i < circle.length; i++) {
        if(circle[i].classList.contains("active") && !(i == 3)){
            circle[i].classList.remove("active")
            circle[i + 1].classList.add("active")
            break
        }
        
       
        if(i == 1){
            next.innerHTML = "<button>Confirm</button>"
            next.querySelector("button").style.backgroundColor = "green"
        }
        
    }}
    if(change[3].classList.contains("active")){
        change[3].classList.remove("active")
        change[4].classList.add("active")
        next.style.display = "none"
        back.style.display = "none"
    }
    nextChange()
    handlePlan()
    handleAddon()
    const sum = $$(".finish .active p")
    var b = 0
    for (let i = 0; i < sum.length; i++){
        var abc = sum[i].innerHTML.replace("$", "")
        var a = parseInt(abc)
        if(isNaN(a)){
    }else{
        b += a}}
    finalRowPrice.innerHTML = `\$${b}/${optionButton.classList.contains("active") ? "yr" : "mo"}`
    }
    
