const outputDiv = document.getElementById('output');

function calculateResult() {
    const orderNumber = document.getElementById('order-number').value.trim();
    const selectedMaterial = document.querySelector('input[name="material"]:checked').value;
    const length = document.getElementById('length').value;
    const width = document.getElementById('width').value;
    const quantity = document.getElementById('quantity').value;

    // Вычисления и заполнение данных
    const sizeOutput = `${length}mm × ${width}mm`;
    const thicknessOutput = 'Unknown'; // Предполагается динамическое вычисление
    const processingOutput = 'PC'; // Предполагается динамическое вычисление

    // Вывести результат
    document.getElementById('order-number-output').textContent = orderNumber;
    document.getElementById('material-output').textContent = selectedMaterial;
    document.getElementById('type-output').textContent = 'Transparent'; // Здесь должна быть реальная информация
    document.getElementById('size-output').textContent = sizeOutput;
    document.getElementById('thickness-output').textContent = thicknessOutput;
    document.getElementById('processing-output').textContent = processingOutput;
    document.getElementById('qty-output').textContent = quantity;

    outputDiv.classList.toggle('hidden');
}
