function createPoint() {
    point = document.createElement("div");
    point.innerHTML = '<input id="x" type="number"><input id="y" type="number">';
    document.getElementById("points").append(point);
}

function shoelace(points) {
    points.push(points[0])

    var xypairs = 0, yxpairs = 0;

    for (i = 0; i < points.length - 1; i++) {
        xypairs += (points[i].x * points[i + 1].y)
        yxpairs += (points[i].y * points[i + 1].x)
    }

    area = 0.5 * (xypairs - yxpairs)

    return area
}

function doShoelace() {
    children = document.getElementById("points").children;
    points = [];

    for (i = 0; i < children.length; i++) {
        var x = parseFloat(children[i].querySelector("#x").value);
        var y = parseFloat(children[i].querySelector("#y").value);

        points.push({ x: x, y: y });
    }

    r = shoelace(points);

    document.getElementById("areaButton").value = r;

}