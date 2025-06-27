<script>
// Скрытие ненужных полей
function showGlassOptions() {
    document.getElementById('glassTypes').style.display = 'block';
    document.getElementById('mirrorTypes').style.display = 'none';
}

function showMirrorOptions() {
    document.getElementById('glassTypes').style.display = 'none';
    document.getElementById('mirrorTypes').style.display = 'block';
}

// Расчет цены (можно дописать свою логику)
function calculatePrice() {
    let orderNum = document.getElementById("orderNumber").value;
    let material = document.querySelector('input[name="materialType"]:checked').value;
    let glassType = document.getElementById("glassType").value || '';
    let mirrorType = document.getElementById("mirrorType").value || '';

    // Простейший расчет (для примера):
    if (!orderNum.trim()) return alert("Заполните номер заказа");

    let resultText = `Заказ №${orderNum}<br>Материал: ${material}`;

    if (material === "Стекло") {
        resultText += `<br>Тип стекла: ${glassType}`;
    } else if (material === "Зеркало") {
        resultText += `<br>Тип зеркала: ${mirrorType}`;
    }

    document.getElementById("result").innerHTML = resultText + "<hr><b>Общая сумма: 0 руб.</b>";
}
</script>
