function createPoint() {
    var point = document.createElement("div");
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

    const area = 0.5 * (xypairs - yxpairs)

    return area
}

function doShoelace() {
    children = document.getElementById("points").children;
    points = [];

    for (let i = 0; i < children.length; i++) {
        const x = parseFloat(children[i].querySelector("#x").value);
        const y = parseFloat(children[i].querySelector("#y").value);

        points.push({ x: x, y: y });
    }

    const r = shoelace(points);
    drawShape(document.getElementById("draw"), points);

    document.getElementById("areaButton").value = r;

}

function sizeCanvas(canvas) {
    const ctx = canvas.getContext("2d");

    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight / 2;

}

function drawShape(canvas, points) {
    const ctx = canvas.getContext("2d");
    var xscl = Number.MAX_SAFE_INTEGER, yscl = Number.MAX_SAFE_INTEGER;

    sizeCanvas(canvas);

    points.forEach((point) => {
        xscl = Math.min(canvas.width / point.x, xscl);
        yscl = Math.min(canvas.height / point.y, yscl);
    });

    const scale = Math.min(xscl, yscl) - 1;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();

    points.push(points[0]);

    const first = points[0];
    ctx.moveTo(first.x * scale, canvas.height - first.y * scale)

    for (let i = 1; i < points.length; i++) {
        const p = points[i];
        ctx.lineTo(p.x * scale, canvas.height - p.y * scale);
    }

    ctx.stroke();
}
