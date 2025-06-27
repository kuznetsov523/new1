function calculateResult() {
    const orderNumber = document.getElementById('order-number').value.trim();
    const selectedMaterial = document.querySelector('input[name="material"]:checked').value;
    const length = parseInt(document.getElementById('length').value.trim()) || 0;
    const width = parseInt(document.getElementById('width').value.trim()) || 0;
    const quantity = parseInt(document.getElementById('quantity').value.trim()) || 0;

    // Проверка, что заказ и размеры указаны
    if (!orderNumber || length === 0 || width === 0) {
        alert('Необходимо заполнить номер заказа и размеры изделия.');
        return;
    }

    // Формирование результатов
    const sizeOutput = `${length}мм × ${width}мм`;
    const thicknessOutput = 'Не задано'; // Допустимо задать реальную толщину позже
    const processingOutput = 'Стандартная обработка'; // Можно выбрать нужную обработку

    // Вывод результатов
    document.getElementById('order-number-output').textContent = orderNumber;
    document.getElementById('material-output').textContent = selectedMaterial;
    document.getElementById('type-output').textContent = 'Прозрачный'; // Здесь возможна модификация
    document.getElementById('size-output').textContent = sizeOutput;
    document.getElementById('thickness-output').textContent = thicknessOutput;
    document.getElementById('processing-output').textContent = processingOutput;
    document.getElementById('qty-output').textContent = quantity;

    // Открываем область с результатом
    document.getElementById('output').classList.remove('hidden');
}
