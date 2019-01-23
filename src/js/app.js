const buildEl = document.getElementById('build');
const heightEl = document.getElementById('height');
const pyramidEl = document.querySelector('#pyramid');

buildEl.addEventListener('click', function () {
    pyramidEl.textContent = "";
    const height = parseInt(heightEl.value);
    drawPyramid(height);
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
            pyramidLevel.appendChild(cube);
        }
        // каждую строку добавляем в пирамиду
        pyramidEl.prepend(pyramidLevel);
    }
}
