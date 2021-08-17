
function increaseCount () {
    let value = parseInt(document.getElementById('countInput').value);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('countInput').value = value + "kg";
}


function decreaseCount () {
    let value = parseInt(document.getElementById('countInput').value);
    value = isNaN(value) ? 0 : value;
    value--;
    if(value < 1) {
        value = 1;
    }
    document.getElementById('countInput').value = value + "kg";
}

function deleteItem () {
    let item = document.getElementById("cartContainer");
    item.classList.add("d-none")
}