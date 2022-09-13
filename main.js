// Triangle Perimeter Assignment Start Code

document.getElementById('btn').addEventListener('click', btnClicked);

function btnClicked() {
    let vertxA = +document.getElementById('vert-1x').value;
    let vertyA = +document.getElementById('vert-1y').value;
    let vertxB = +document.getElementById('vert-2x').value;
    let vertyB = +document.getElementById('vert-2y').value;
    let vertxC = +document.getElementById('vert-3x').value;
    let vertyC = +document.getElementById('vert-3y').value;
    
    // retrieves function
    let aLength = document.getElementById('aLength').innerHTML = dist(vertyB, vertyC, vertxB, vertxC);
    let cLength = document.getElementById('cLength').innerHTML = dist(vertyA, vertyB, vertxA, vertxB);
    let bLength = document.getElementById('bLength').innerHTML = dist(vertyC, vertyA, vertxC, vertyA);
    document.getElementById('perimeterTotal').innerHTML = peri(aLength, cLength, bLength);
}

// math for distances
function dist(y1Val, y2Val, x1Val, x2Val) {
    let xValue = x1Val - x2Val
    let yValue = y1Val - y2Val
    let distance = Math.sqrt(xValue ** 2 + yValue ** 2)
    return distance;
}

// gets values to add
function peri(aValue, cValue, bValue) {
    if (aValue, bValue, cValue === 0) {
        let perimeter = 0
        return perimeter;
    }
    else {
        let perimeter = aValue + bValue + cValue;
        return perimeter;
    }
}