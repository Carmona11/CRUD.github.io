let orders = []

window.addEventListener('DOMContentLoaded', (event) => {
    loadAllTrades()
})

function open_trade() {
    //Creamos nuestras variables
    var stock = document.getElementById("stock").value;
    var position = document.getElementById("position").value;
    var price = document.getElementById("price").value;
    var quantity = document.getElementById("quantity").value;
    var total = quantity * price

    //Validamos que haya info y la cargamos a [orders]
    if (stock && position && price && quantity != "") {
        let table = document.getElementById("portfolio")
        let table_len = (table.rows.length) - 1;
        let row = table.insertRow(table_len)
        row.insertCell(0).innerHTML = stock
        row.insertCell(1).innerHTML = position
        row.insertCell(2).innerHTML = price
        row.insertCell(3).innerHTML = quantity
        row.insertCell(4).innerHTML = total
        row.insertCell(5).innerHTML = '<button>Eliminar</button>' + 
        '<button>Editar</button>'
    }
}
