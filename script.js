// Сворачивание Header:

const headerBtn = document.querySelector('.header_title');
const header = document.querySelector('.header');
const container = document.querySelector('.container');
// const arrow = document.querySelector('.fas');
const form = document.querySelector('.form');

headerBtn.onclick = function header_size() {
  header.style.height = '80px';
  header.style.backgroundImage =
    'url(./assets/img/main_min.jpg)';
  container.style.flexDirection = 'row';
  container.style.justifyContent = 'space-between';
  // arrow.style.display = 'none';
  headerBtn.style.fontSize = '25px';
  form.style.display = 'flex';
};

// Кнопка Search:
const searchBtn = document.querySelector('.search_btn');
const search_input =
  document.querySelector('.search_input');

searchBtn.onclick = async function search() {
  console.log(search_input.value);
  const res = await fetch(
    `https://api.unsplash.com/search/photos?query=${search_input.value}&per_page=30&orientation=landscape&client_id=Bpz6MYm0jc-mS2vcu3EhlC7DV4l1OsAp2l6UK4wmM94`
  );
  const data = await res.json();
  // console.log(data.results[2или3]);
  // console.log(data.results[4]);
  // console.log(data.results[9]);
  // console.log(data.results[7]);
  // console.log(data.results[8]);
  // console.log(data.results[14]);
  // console.log(data.results[16]);
  // console.log(data.results[20]);
  console.log(data.results[25]);
  console.log(data.results[26]);
};
