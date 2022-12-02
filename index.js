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
function Submit() {
    var dataEntered = orderInput();
    var readOrders = readingDataFromLocalStorage(dataEntered);
    insert(readOrders);
}

// CREATE
// Obtenemos data del Form
function orderInput() {
    var stock = document.getElementById("stockInput").value;
    var position = document.getElementById("positionInput").value;
    var price = document.getElementById("priceInput").value;
    var amount = document.getElementById("amountInput").value;
    var total = price * amount;

    var orderPlaced = [stock, position, price, amount, total];
    return orderPlaced;
}

// READ
// Ordenes en el LocalStorage
function readingDataFromLocalStorage(dataEntered) {
    // Almacenamos ordenes en el LocalStorage
    var st = localStorage.setItem("Stock", dataEntered[0]);
    var po = localStorage.setItem("Position", dataEntered[1]);
    var pr = localStorage.setItem("Price", dataEntered[2]);
    var am = localStorage.setItem("Amount", dataEntered[3]);
    var to = localStorage.setItem("Total", dataEntered[4]);

    // Obtenemos valores del LocalStorage a la tabla
    var st1 = localStorage.getItem("Stock", st);
    var po1 = localStorage.getItem("Position", po);
    var pr1 = localStorage.getItem("Price", pr);
    var am1 = localStorage.getItem("Amount", am);
    var to1 = localStorage.getItem("Total", to);

    var orderPlaced = [st1, po1, pr1, am1, to1];
    return orderPlaced;
}

// INSERT
function insert(readOrders){
    var table = document.getElementById("orderList");
    var row = table.insertRow().innerHTML = 
    '<tr><td>'+readOrders[0]+'</td><td>'+readOrders[1]+'</td><td>'+"$"+readOrders[2]+'</td><td>'+readOrders[3]+'</td><td>'+"$"+readOrders[4]+'</td><button type="button" class="btn btn-warning" onclick = edit(this)>Edit</button><button type="button" class="btn btn-danger">Delete</button></tr>';

}







