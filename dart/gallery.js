var CANVAS = 0;
var PAPER = 1;
var CANVAS_COUNT = 33;
var PAPER_COUNT = 29;

var open_modal = function(event) {
  var modal = document.getElementById("myModal");
  var spotlight = document.getElementById("spotlight");
  src = event.target.src;
  var i = document.createElement('img');
  i.src = src;
  i.height = 500;

  var span = document.createElement('span');
  span.classList.add('close');
  span.innerHTML = '&times';
  span.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  spotlight.innerHTML = '';
  spotlight.appendChild(span);
  spotlight.appendChild(i);
  modal.style.display = "flex";
};


// window.onclick = function(event) {
//   var modal = document.getElementById("myModal");
//   if (event.target == modal)
//     modal.style.display = "none";
// };


var setup = function(mode) {
  var src_string = '';
  var count = 0;

  var content = document.getElementById("content");

  if (mode == CANVAS) {
    src_string = 'img/canvas/';
    count = CANVAS_COUNT;
  }
  if (mode == PAPER) {
    src_string = 'img/paper/';
    count = PAPER_COUNT;
  }

  for (var i=0; i<count; i++) {
    var img = document.createElement('img');
    img.src = src_string + i + '.png';
    img.height = 200;
    img.addEventListener('click', open_modal);
    content.appendChild(img);
  }

  window.addEventListener('click', function(event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal)
    modal.style.display = "none";
  }
  );
  // document.querySelectorAll('img').forEach( item => {
  //   item.addEventListener('click', open_modal)
  // });
};
