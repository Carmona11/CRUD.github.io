// Funciones para calcular el total 
// Funciones para calcular el total 
let previewPrice = document.getElementById("priceInput");
let previewAmount = document.getElementById("amountInput");

previewPrice.addEventListener('input', (event) => {
    const totalPreview = document.getElementById('totalInput');
    totalPreview.placeholder = '$' + previewPrice.value * previewAmount.value;
});

previewAmount.addEventListener('input', (event) => {
    const totalPreview = document.getElementById('totalInput');
    totalPreview.placeholder = '$' + previewPrice.value * previewAmount.value;
});

// Variable Globales
var row = null;

function updateRows() {
    const orders = JSON.parse(localStorage.getItem("orders"))
    if (orders) {
        const table = document.getElementById("orderList")
        table.innerHTML = ""
        orders.forEach((record, index) => {
            table.insertRow().innerHTML =
                '<tr><td>' + (index + 1) +
                '<td>' + record.stock +
                '</td><td>' + record.position +
                '</td><td>' + "$" + record.price +
                '</td><td>' + record.amount +
                '</td><td>' + "$" + record.total +
                `</td><button type="button" class="btn btn-warning" onclick = "edit(${index})">Edit</button><button type="button" class="btn btn-danger" onclick = deleteOrder(${index})>Delete</button></tr>`;
        })
    }
}

updateRows()

function Submit() {
    var dataEntered = orderInput();
    if (row == null) {
        readingDataFromLocalStorage(dataEntered);
        updateRows()
        msg.innerHTML = "Data Inserted!";
    } else {
        update();
        msg.innerHTML = "Data Updated!";
        row = null;
    }
}

// CREATE
// Obtenemos data del Form
function orderInput() {
    var stock = document.getElementById("stockInput").value;
    var position = document.getElementById("positionInput").value;
    var price = document.getElementById("priceInput").value;
    var amount = document.getElementById("amountInput").value;
    var total = price * amount;

    var orderPlaced = { stock, position, price, amount, total };
    return orderPlaced;
}

// READ
// Ordenes en el LocalStorage
function readingDataFromLocalStorage(dataEntered) {
    const currentOrders = JSON.parse(localStorage.getItem("orders")) || []
    console.log(dataEntered)
    console.log("current orders are:", currentOrders)
    localStorage.setItem("orders", JSON.stringify([...currentOrders, dataEntered]))
}

// EDIT
function edit(index) {
    const order = JSON.parse(localStorage.getItem("orders"))[index]
    row = index
    document.getElementById("stockInput").value = order.stock;
    document.getElementById("positionInput").value = order.position;
    document.getElementById("priceInput").value = order.price;
    document.getElementById("amountInput").value = order.amount;
    document.getElementById("totalInput").placeholder = order.total;
}

// UPDATE
function update() {
    const orders = JSON.parse(localStorage.getItem("orders"))
    var stock = document.getElementById("stockInput").value;
    var position = document.getElementById("positionInput").value;
    var price = document.getElementById("priceInput").value;
    var amount = document.getElementById("amountInput").value;
    var total = price * amount;

    orders[row] = { stock, position, price, amount, total }
    localStorage.setItem("orders", JSON.stringify(orders))
    updateRows()
}

// DELETE

function deleteOrder(index) {
    const orders = JSON.parse(localStorage.getItem("orders"));
    orders.splice(index, 1);
    msg.innerHTML = "Order Deleted!";
    localStorage.setItem("orders", JSON.stringify(orders));
    updateRows()
}
