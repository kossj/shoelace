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
    drawShape(document.getElementById("draw"), points);

    document.getElementById("areaButton").value = r;

}

function drawShape(canvas, points) {
    const scale = s => s * 100;
    var c = canvas;
    var ctx = c.getContext("2d");
    ctx.reset();

    var height = c.height;
    var width = c.width;

    points.push(points[0]);

    first = points[0];
    ctx.moveTo(scale(first.x), height - scale(first.y))

    for (i = 1; i < points.length; i++) {
        p = points[i];
        ctx.lineTo(scale(p.x), height - scale(p.y));
    }

    ctx.stroke();

}