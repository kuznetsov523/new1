// script.js

function calculatePrice() {
    const orderNumber = document.getElementById('orderText').value || '';
    const width = parseFloat(document.getElementById('width').value);
    const height = parseFloat(document.getElementById('height').value); 
    const material = document.getElementById('materialSelect').value;
    const quantity = parseInt(document.getElementById('quantity').value);

    if (!width || !height || !material) return alert("Заполните все поля!");

    // Формирование результата
    const resultText = `${orderNumber} ${material} ${width}x${height} мм\nКоличество: ${quantity};

    document.getElementById('resultArea').value = resultText;
}
