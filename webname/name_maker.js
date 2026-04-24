IMAGE_DIR = "letters/";
IMAGES = ['a_0.jpg', 'a_1.jpg', 'a_2.jpg', 'a_3.jpg', 'a_4.jpg', 'b_0.jpg', 'b_1.jpg', 'c_0.jpg', 'c_1.jpg', 'c_2.jpg', 'd_0.jpg', 'd_1.jpg', 'e_0.jpg', 'e_1.jpg', 'e_2.jpg', 'e_3.jpg', 'f_0.jpg', 'f_1.jpg', 'g_0.jpg', 'h_0.jpg', 'h_1.jpg', 'i_0.jpg', 'i_1.jpg', 'i_2.jpg', 'i_3.jpg', 'i_4.jpg', 'j_0.jpg', 'j_1.jpg', 'j_2.jpg', 'k_0.jpg', 'k_1.jpg', 'l_0.jpg', 'l_1.jpg', 'l_2.jpg', 'l_3.jpg', 'm_0.jpg', 'm_1.jpg', 'm_2.jpg', 'n_0.jpg', 'n_1.jpg', 'n_2.jpg', 'o_0.jpg', 'o_1.jpg', 'p_0.jpg', 'p_1.jpg', 'q_0.jpg', 'q_1.jpg', 'r_0.jpg', 'r_1.jpg', 'r_2.jpg', 'r_3.jpg', 's_0.jpg', 's_1.jpg', 's_2.jpg', 't_0.jpg', 't_1.jpg', 'u_0.jpg', 'u_1.jpg', 'v_0.jpg', 'v_1.jpg', 'v_2.jpg', 'v_3.jpg', 'w_0.jpg', 'w_1.jpg', 'x_0.jpg', 'x_1.jpg', 'x_2.jpg', 'y_0.jpg', 'y_1.jpg', 'y_2.jpg', 'z_0.jpg', 'z_1.jpg'];
IMAGE_WIDTH = 282;
IMAGE_HEIGHT = 676;
THUMB_OFFSET = 0.3;

// Define the media query
const isMobile = window.matchMedia("(max-width: 768px)");

// Set variable based on initial match
let isSmallScreen = isMobile.matches;

// Update variable dynamically when screen size changes
isMobile.addEventListener("change", (e) => {
    isSmallScreen = e.matches;
    if (isSmallScreen) {
      THUMB_OFFSET = 0.15;
    }
    else {
      THUMB_OFFSET = 0.3;
    }
});


let selected_images = [];
let word = '';

const make_letter_list = function(letter) {
  let letter_list = [];
  for (file_name of IMAGES) {
    if (file_name[0] == letter) {
      letter_list.push(file_name);
    }
  }
  return letter_list;
};


const make_letter_image_div = function(letter_list, letter_index) {
  let image_div = document.createElement('div');
  image_div.classList.add('row-container');
  for (letter_image of letter_list) {
    let container = document.createElement('div');
    container.classList.add('image-card');
    container.addEventListener('click', pick_image);
    let letter_img = document.createElement('img');
    letter_img.dataset.letter = letter_index;
    letter_img.src = IMAGE_DIR + letter_image;
    //console.log(letter_img);
    container.appendChild(letter_img);
    image_div.appendChild(container);
  }
  return image_div;
};

const make_all_letter_div = function(word) {
  let full_div = document.createElement('div');
  let letter_index = 0;
  for (letter of word) {
    let letter_list = make_letter_list(letter);
    full_div.appendChild(make_letter_image_div(letter_list, letter_index));
    letter_index+= 1;
  }
  return full_div;
};

const get_letters = function() {
  word = document.getElementById("word").value;
  //console.log(word);
  // let letter_list = make_letter_list(word[0]);
  // let letter_div = make_letter_image_div(letter_list);
  selected_images = new Array( word.length )
  let all_letter_div = make_all_letter_div(word);
  let holder = document.getElementById('letters');
  holder.innerHTML = '';
  holder.appendChild(all_letter_div);

  if (document.getElementById('word_image')) {
    document.getElementById('word_image').remove();
  }
  let wi = document.createElement('canvas');
  wi.id = 'word_image';
  wi.height = IMAGE_HEIGHT * THUMB_OFFSET;
  wi.width = (IMAGE_WIDTH * THUMB_OFFSET) * word.length;
  let cc = document.getElementById('canvas_containter');
  //cc.innerHTML = '';
  cc.appendChild(wi);
};

const pick_image = function(e) {
  //console.log(e.target.src);
  //to do: select/unselect
  //get letter and update image file list
  let picked_letter = e.target.dataset.letter;
  //console.log(picked_letter);
  selected_images[picked_letter] = e.target;
  let wi = document.getElementById('word_image');
  let ctx = wi.getContext('2d');
  // Clears the entire canvas
  ctx.clearRect(0, 0, wi.width, wi.height);
  draw_word(ctx, THUMB_OFFSET);
};

const draw_word = function(ctx, scale) {

  //console.log(ctx);
  let x = 0;
  for ( image of selected_images ) {
    if (image) {
      console.log(image);
      ctx.drawImage(image, x, 0, IMAGE_WIDTH * scale, IMAGE_HEIGHT * scale);
    }//image exists
    x+= IMAGE_WIDTH * scale;
  }
};

const save_image = function() {
  let save_canvas = document.createElement('canvas');
  save_canvas.height = IMAGE_HEIGHT;
  save_canvas.width = IMAGE_WIDTH * word.length;
  ctx = save_canvas.getContext('2d');
  ctx.clearRect(0, 0, save_canvas.width, save_canvas.height);
  draw_word(ctx, 1);

  let data_url = save_canvas.toDataURL('image/png', 1.0);
  const link = document.createElement('a');
  link.download = word + '_landsat.png';
  link.href = data_url;
  link.click();
};
