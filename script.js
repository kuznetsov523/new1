// script.js
const prices = {
    'стекло': 50,
    'зеркало': 70,
    'закаленное стекло': 100,
    'декоративное стекло': 120
};

function calculatePrice() {
    const orderNumber = document.getElementById('orderText').value || '';
    const width = parseFloat(document.getElementById('width').value);
    const height = parseFloat(document.getElementById('height').value);
    const quantity = parseInt(document.getElementById('quantity').value);
    const material = document.getElementById('materialSelect').value;

    if (!width || !height || !material) return alert("Заполните все поля!");

    // Формирование результата
    const resultText = `${orderNumber} ${material} ${width}x${height} мм\nКоличество: ${quantity}\nИтого: ₽${totalCost}`;

    document.getElementById('resultArea').value = resultText;
}
