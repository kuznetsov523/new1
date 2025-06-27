// Функция обновления полей при выборе материала
function updateFields() {
    const material = document.querySelector('input[name="material"]:checked').value;
    let typesOptions = '';
    let thicknessOptions = '';
    let processingOptions = '';

    if (material === 'glass') { // Если выбрано стекло
        typesOptions += '<select id="type">';
        ['Прозрачное', 'Осветлённое', 'Матовое', 'Серое', 'Бронзовое'].forEach(type => {
            typesOptions += `<option value="${type}">${type}</option>`;
        });
        typesOptions += '</select>';
        
        thicknessOptions += '<select id="thickness">';
        [3, 4, 5, 6, 8, 10, 12].forEach(thickness => {
            thicknessOptions += `<option value="${thickness}">${thickness} мм</option>`;
        });
        thicknessOptions += '</select>';
        
        processingOptions += '<select id="processing">';
        ['ПК', 'Шлифовка', 'Фацетирование'].forEach(processing => {
            processingOptions += `<option value="${processing}">${processing}</option>`;
        });
        processingOptions += '</select>';
    }
    else if (material === 'mirror') { // Если выбрано зеркало
        typesOptions += '<select id="type">';
        ['Серебряное', 'Осветлённое', 'Графитовое', 'Состаренное'].forEach(type => {
            typesOptions += `<option value="${type}">${type}</option>`;
        });
        typesOptions += '</select>';
        
        thicknessOptions += '<select id="thickness">';
        [4, 6].forEach(thickness => {
            thicknessOptions += `<option value="${thickness}">${thickness} мм</option>`;
        });
        thicknessOptions += '</select>';
        
        processingOptions += '<select id="processing">';
        ['ПК', 'Шлифовка', 'Фацетирование'].forEach(processing => {
            processingOptions += `<option value="${processing}">${processing}</option>`;
        });
        processingOptions += '</select>';
    }

    document.getElementById("typeSelect").innerHTML = typesOptions;
    document.getElementById("thicknessSelect").innerHTML = thicknessOptions;
    document.getElementById("processingSelect").innerHTML = processingOptions;
}

// Функция расчёта результатов
function calculateResults() {
    const orderNumber = document.getElementById('orderNumber').value.trim();
    const materialRadioValue = document.querySelector('input[name="material"]:checked').value;
    let materialText = ''; // Переменная для хранения русского названия

    if (materialRadioValue === 'glass') {
        materialText = 'стекло';
    } else if (materialRadioValue === 'mirror') {
        materialText = 'зеркало';
    }

    const type = document.getElementById('type').value;
    const length = document.getElementById('length').value; // Без единиц измерения
    const width = document.getElementById('width').value;   // Без единиц измерения
    const thickness = document.getElementById('thickness').value + ' мм'; // Сохраняем единицу измерения
    const processing = document.getElementById('processing').value;
    const quantity = document.getElementById('quantity').value;

    const resultString = `${orderNumber}, ${materialText}, ${type}, ${length}x${width}x${thickness}, ${processing}`;

    document.getElementById('results').innerHTML =
        `
        <p>Итоговая техническая карта:<br>${resultString}</p>
        <p>Количество изделий: ${quantity}</p>
        `;
}

// Обновляем поля сразу при загрузке страницы
window.onload = function () {
    updateFields();
};
