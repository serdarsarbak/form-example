let resetDOM = document.querySelector("#reset")
resetDOM.addEventListener ("click", refresh)
function refresh() {
    window.location.reload();
}
let userFormDOM = document.querySelector("#formSubmit")
userFormDOM.addEventListener("click", formHandler)
let finalport = 0;
let ALERTDOM = document.querySelector("#alert")
let SUCCESSDOM =document.querySelector("#success")
const ALERT =`
<div class="alert alert-danger alert-dismissible fade show" role="alert">
  <strong> You should check in on some of those fields below. </strong>
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`
const ALERTNEGATIVE =`
<div class="alert alert-danger alert-dismissible fade show" role="alert">
  <strong> You cannot give negative values. </strong>
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`

function formHandler(event) {
    event.preventDefault()
    const stockName = document.querySelector("#stockName")
    const stockPrice = document.querySelector("#stockPrice")
    const stockNumber = document.querySelector("#stockNumber")
    
    if (stockName.value && stockPrice.value>0 && stockNumber.value>0) {
        const SUCCESS =`
<div class="alert alert-success alert-dismissible fade show" role="alert">
  <strong>${stockName.value}</strong> is successfully added to your Portfolio.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`
        SUCCESSDOM.innerHTML = SUCCESS;
        addItem (stockName.value, stockPrice.value, stockNumber.value)
        addTotalPortfolio (stockPrice.value, stockNumber.value)
        stockName.value = "" 
        stockPrice.value = "" 
        stockNumber.value = ""
    } else if (stockName.value && stockPrice.value<0 && stockNumber.value<0) {
        ALERTDOM.innerHTML = ALERTNEGATIVE;
        stockName.value = "" 
        stockPrice.value = "" 
        stockNumber.value = ""

    } else {
        ALERTDOM.innerHTML = ALERT
        stockName.value = "" 
        stockPrice.value = "" 
        stockNumber.value = ""
    }
}

let listDOM = document.querySelector("#list")
function addItem (stockname, stockprice, stocknumber) {
    let liDOM = document.createElement("li")
    liDOM.innerHTML = `<li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">${stockname}</div>
      Price per Share: <span class="fw-bold">${stockprice}</span>
    </div>
    Value of shares: <span class="badge bg-primary rounded-pill">$ ${(stockprice*stocknumber)}</span>`
    
    listDOM.append(liDOM)
}

function addTotalPortfolio (stockprice, stocknumber){
    let portfolio = document.querySelector("#portfolio")
    let totalportfolio = stockPrice.value * stockNumber.value
    finalport += totalportfolio

    portfolio.innerHTML = `Total Value of Your Portfolio: $ ${finalport}`
}