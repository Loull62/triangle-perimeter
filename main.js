// Triangle Perimeter Assignment Start Code

document.getElementById('btn').addEventListener('click', btnClicked);

function btnClicked() {
    let vertxA = +document.getElementById('vert-1x').value;
    let vertyA = +document.getElementById('vert-1y').value;
    let vertxB = +document.getElementById('vert-2x').value;
    let vertyB = +document.getElementById('vert-2y').value;
    let vertxC = +document.getElementById('vert-3x').value;
    let vertyC = +document.getElementById('vert-3y').value;

    document.getElementById('abTotal').innerHTML = dist(vertxA, vertxB, vertyB, vertyC)
}

function dist(x1Val, y1Val, x2Val, y2Val) {
    // let abValue = vertxA - vertxB;
    // let bcValue = vertyB - vertyC;
    let aValue = x1Val - x2Val;
    let bValue = y1Val - y2Val;

    let acValue = mathsqrt(aValue**2 + bValue**2);


    return acValue;
}