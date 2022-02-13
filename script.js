//    Сворачивание/разворачивание Header:
const headerBtn = document.querySelector('.header_title');
const header = document.querySelector('.header');
const container = document.querySelector('.container');
const form = document.querySelector('.form');
const error = document.querySelector('.header_error');
const clear = document.querySelector('.fa-solid.fa-xmark');
let headerSize = 'full';
let errorStatus = false;

headerBtn.onclick = function header_size() {
  if (errorStatus) {
    return;
  } else if (headerSize === 'full') {
    headerSize = 'small';
    header.style.height = '80px';
    header.style.backgroundImage =
      'url(./assets/img/main_min.jpg)';
    container.style.flexDirection = 'row';
    container.style.justifyContent = 'space-between';
    headerBtn.style.fontSize = '25px';
    form.style.display = 'flex';
    error.style.display = 'none';
    search_input.focus();
    document.body.style.overflow = 'hidden';
  } else {
    headerSize = 'full';
    header.style.height = '100vh';
    header.style.backgroundImage =
      'url(./assets/img/main.jpg)';
    container.style.flexDirection = 'column';
    container.style.justifyContent = 'center';
    headerBtn.style.fontSize = '70px';
    form.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
};
clear.onclick = function header_size() {
  search_input.value = '';
};
// сообщение об ошибке
function header_full() {
  headerSize = 'full';
  header.style.height = '100vh';
  header.style.backgroundImage =
    'url(./assets/img/main.jpg)';
  container.style.flexDirection = 'column';
  container.style.justifyContent = 'center';
  headerBtn.style.fontSize = '70px';
  form.style.display = 'none';
  error.style.display = 'flex';
}

//    дефолтные картинки clouds
search('orange%20clouds');

// константы для search и обработчики событий
const searchBtn = document.querySelector('.search_btn');
const search_input =
  document.querySelector('.search_input');
const resultsImg = document.querySelector(
  '.results_wrapper'
);
const loader = document.querySelector('.loader');
const image = document.querySelectorAll('.image');
search_input.addEventListener('keydown', function enter(e) {
  if (e.keyCode === 13) {
    search(search_input.value);
  }
});

searchBtn.onclick = function () {
  search(search_input.nodeValue);
};

let status = 0;
let timerId = null;
//   работа search:
async function search(value) {
  try {
    const res = await fetch(
      `https://api.unsplash.com/search/photos?query=${value}&per_page=10&orientation=landscape&client_id=Bpz6MYm0jc-mS2vcu3EhlC7DV4l1OsAp2l6UK4wmM94`
    );
    const data = await res.json();
    let element = '';
    for (let i = 1; i < 10; i++) {
      element += `<img
      src=${data.results[i].urls.full}
      alt="image"
      />`;
      console.log(data.results[i].urls.full);
    }
    resultsImg.innerHTML = element;

    resultsImg.style.opacity = 0;
    loader.style.display = 'block';
    timerId = setInterval(loadInterval, 600);
    status = 0;
    errorStatus = false;
    Load();
  } catch (error) {
    errorStatus = true;
    header_full();
  }
}

function Load() {
  image.forEach((elem) => {
    elem.onload = imgLoaded;
  });
}

function imgLoaded() {
  status += 1;
}

function loadInterval() {
  console.log(status);
  if (status === 9) {
    resultsImg.style.opacity = 1;
    loader.style.display = 'none';
    clearInterval(timerId);
  }
}
