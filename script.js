// Удалили массив цен

function formatResult() {
    const orderNumber = document.getElementById('orderNumber').value || '';
    const width = parseFloat(document.getElementById('width').value);
    const height = parseFloat(document.getElementById('height').value);
    const material = document.getElementById('materialSelect').value;
    const heatTreatmentChecked = document.getElementById('heatTreatmentCheckbox').checked ? 'Да' : 'Нет';

    if (!width || !height || !material) return alert("Заполните все обязательные поля!");

    // Формируем итоговую строку
    const resultText = `
        Номер заказа: ${orderNumber}
        Материал: ${material}
        Ширина (мм): ${width}
        Высота (мм): ${height}
        Закалка: ${heatTreatmentChecked}`;

    document.getElementById('resultArea').value = resultText.trim();
}
