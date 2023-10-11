var pointa = {x:0,y:0};
var pointb = {x:1,y:0};
var pointc = {x:0,y:1};

var points = [pointa,pointb,pointc]

points.push(points[0])

var xypairs=0, yxpairs=0;

for (i=0;i<points.length-1;i++) {
    xypairs += (points[i].x * points[i+1].y)
    yxpairs += (points[i].y * points[i+1].x)
}

area = 0.5 * (xypairs-yxpairs)

console.log(area)