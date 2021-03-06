const pyramidEl = document.getElementById('pyramid');
const chooseSymbolEl = document.getElementById('brick-symbol');
const rangeSliderEl = document.getElementById('range');
const rangeResultEl = document.getElementById('range-result');
let optionEl;
const height = parseInt(rangeSliderEl.value);
drawPyramid(height);


chooseSymbolEl.addEventListener('change', () => {
    pyramidEl.textContent = '';
    optionEl = chooseSymbolEl.value;
    const height = parseInt(rangeSliderEl.value);
    drawPyramid(height);
});

rangeSliderEl.addEventListener('mousemove', (evt) => {
    if (event.which === 1) {
        pyramidEl.textContent = '';
        rangeResultEl.innerHTML = rangeSliderEl.value;
        const height = parseInt(rangeSliderEl.value);
        console.log(evt);
        drawPyramid(height);
    }
});

function drawPyramid(height) {
    const heightOfPyramid = height + 2;
    for (let i = 2; i <= heightOfPyramid; i++) {
        // создаем элемент для "строки"
        const pyramidLevel = document.createElement('div');
        pyramidLevel.className = 'row';
        // для каждой строки добавляем кубы
        for (let j = 0; j < heightOfPyramid - i; j++) {
            const cube = document.createElement('div');
            cube.className = 'cube-block';
            cube.textContent = optionEl;
            pyramidLevel.appendChild(cube);
        }
        // каждую строку добавляем в пирамиду
        pyramidEl.prepend(pyramidLevel);
    }
}

