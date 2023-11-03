function openShape(shapeName) {
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(shapeName).style.display = "block";
}

function calculateSquare() {
    var length = parseFloat(document.getElementById("squareLength").value);
    var width = parseFloat(document.getElementById("squareWidth").value);
    var area = length * width;
    var perimeter = 2 * (length + width);

    document.getElementById("squareArea").innerText = area;
    document.getElementById("squarePerimeter").innerText = perimeter;
}

function calculateTriangle() {
    var base = parseFloat(document.getElementById("triangleBase").value);
    var height = parseFloat(document.getElementById("triangleHeight").value);
    var area = 0.5 * base * height;
    // For calculating the perimeter, additional implementation is needed for triangle type
    var perimeter = "Perimeter Calculation"; // Add actual formula for the perimeter

    document.getElementById("triangleArea").innerText = area;
    document.getElementById("trianglePerimeter").innerText = perimeter;
}

function calculateCircle() {
    var radius = parseFloat(document.getElementById("circleRadius").value);
    var area = Math.PI * radius * radius;
    var perimeter = 2 * Math.PI * radius;

    document.getElementById("circleArea").innerText = area;
    document.getElementById("circlePerimeter").innerText = perimeter;
}