let gridN = document.getElementById('gridN');
let rst = document.getElementById('rst');
let wrapperDiv = document.getElementById('wrapperDiv');
let gridNum = null;

gridN.addEventListener('click', () => {
    gridNum = parseInt(prompt('Enter the number of grids you want (max 100)'));
    if (gridNum && gridNum <= 100) {
        createGrid(gridNum);
        colorizer(gridNum);
    } else {
        alert('Please enter a number less than or equal to 100');
    }
});

function createGrid(gridNum) {
    // Clear existing grid
    wrapperDiv.innerHTML = '';
    for (let i = 0; i < gridNum; i++) {
        let row = document.createElement('div');
        row.className = 'rowGrid';
        wrapperDiv.appendChild(row);
    }
    let rowGrid = document.getElementsByClassName('rowGrid');
    for (let i = 0; i < gridNum; i++) {
        for (let j = 0; j < gridNum; j++) {
            let coloumnDiv = document.createElement('div');
            rowGrid[i].appendChild(coloumnDiv);
            coloumnDiv.className = 'cell';
        }
    }
}

function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(',') + ')';
}

function colorizer(gridNum) {
    let rowGrid = document.getElementsByClassName('rowGrid');
    for (let i = 0; i < gridNum; i++) {
        for (const child of rowGrid[i].children) {
            child.addEventListener('mouseover', () => {
                child.style.backgroundColor = randomColor();
            });
        }
    }
}

rst.addEventListener('click', () => {
    wrapperDiv.innerHTML = '';
});
