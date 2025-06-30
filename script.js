// Отображение дополнительного поля в зависимости от выбора материала
function showAdditionalField() {
    const glassSelected = document.querySelector('input[value="Стекло"]').checked;
    const mirrorSelected = document.querySelector('input[value="Зеркало"]').checked;

    const additionalGlass = document.getElementById('additional-field-glass');
    const additionalMirror = document.getElementById('additional-field-mirror');

    if (glassSelected) {
        additionalGlass.style.display = 'block';
        additionalMirror.style.display = 'none';
    } else if (mirrorSelected) {
        additionalMirror.style.display = 'block';
        additionalGlass.style.display = 'none';
    }
}

// Основной скрипт расчётов
function calculateResult() {
    const orderNumber = document.getElementById('order-number').value.trim();
    const selectedMaterial = document.querySelector('input[name="material"]:checked').value;
    const length = parseInt(document.getElementById('length').value.trim()) || 0;
    const width = parseInt(document.getElementById('width').value.trim()) || 0;
    const quantity = parseInt(document.getElementById('quantity').value.trim()) || 0;
    const processingMethod = document.getElementById('processing').value;

    // Определение типа (стекла или зеркала)
    let typeOutput = '';
    let thicknessOutput = '';

    if (selectedMaterial === 'Стекло') {
        typeOutput = document.getElementById('glass-type').value;
        thicknessOutput = document.getElementById('thickness-glass').value;
    } else if (selectedMaterial === 'Зеркало') {
        typeOutput = document.getElementById('mirror-type').value;
        thicknessOutput = document.getElementById('thickness-mirror').value;
    }

    // Проверка, что все поля заполнены правильно
    if (
        !orderNumber ||
        typeOutput.length === 0 ||
        thicknessOutput.length === 0 ||
        length === 0 ||
        width === 0 ||
        quantity === 0 ||
        processingMethod.length === 0
    ) {
        alert('Невозможно ехать, не заполнены поля!');
        return;
    }

    // Формирование результата в правильном формате
    const sizeOutput = `${length}×${width}×${thicknessOutput} мм`; // Включаем единицу измерения
    const finalResult = `${orderNumber}, ${selectedMaterial}, ${typeOutput}, ${sizeOutput}, ${processingMethod}`;

    // Вывод результатов
    document.getElementById('final-result').textContent = finalResult;
    document.getElementById('qty-output').textContent = quantity;

    // Открываем область с результатом
    document.getElementById('output').classList.remove('hidden');
}

// Изначально показываем поля для стекла
document.getElementById('additional-field-glass').style.display = 'block';
document.getElementById('additional-field-mirror').style.display = 'none';

// Покажем нужное поле при первом открытии страницы
showAdditionalField();
