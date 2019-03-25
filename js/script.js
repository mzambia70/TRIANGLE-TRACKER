function triangleTracker() {

  var A = parseInt(document.getElementById('a').value);
  var B = parseInt(document.getElementById('b').value);
  var C = parseInt(document.getElementById('c').value);
  var tri=[A,B,C];

  var triangle=["Equalateral", "isosceles", "scalene"];
  var inform=document.getElementById('inform');

if (tri[0] + tri[1] > tri[2] && tri[1] + tri[2] > tri[0] && tri[0] + tri[2] > tri[1]) {

    if (tri[0] == tri[1] && tri[1] == tri[2] && tri[0]==tri[2]) {

      inform.innerHTML = "<h1>This is an equilateral triangle</h1> <p>This triangle has all its sides and angles equal</p>"
      }

    else if (tri[0] != tri[1] && tri[1] != tri[2] && tri[0] != tri[2]) {

      inform.innerHTML = "<h1>this is a scalene triangle</h1> <p>This is a triangle whose sides and angles are not equal</p>"
     }

    else  {
     inform.innerHTML = "<h1>this is  an isosceles triangle</h1> <p>Two of its sides and angles are equal</p>"
     }
}

  else if(isNaN(tri[0]) || isNaN(tri[1]) || isNaN(tri[2]) ){
     alert('not a number');
  }
  else {
    alert('not a triangle');
  }

}.
