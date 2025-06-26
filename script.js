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

    // Расчет площади одного изделия
    const areaOneItem = (width * height / 1_000_000); // Перевод мм² в м²

    // Стоимость одной единицы материала
    let pricePerUnit = prices[material];

    // Общая цена всех изделий
    const totalCost = Math.round(areaOneItem * pricePerUnit * quantity * 100) / 100;

    // Формирование результата
    const resultText = ` Данные для копирования :${orderNumber}\n ${material}\n ${width}x${height} мм\nКоличество: ${quantity}\nОбщая площадь: ${Math.round(areaOneItem*quantity*100)/100} м²\nИтого: ₽${totalCost}`;

    document.getElementById('resultArea').value = resultText;
}
