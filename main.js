const arr = new Array(19);

let currentPage = 1;

const $pagination = document.querySelector('.pagination__page-number');

const $arrowPrev = document.createElement('img');
$arrowPrev.className = 'arrowPrev';
$arrowPrev.src = 'assets/svg/arrowRight.svg';
$pagination.appendChild($arrowPrev);

const $selectedButton = document.createElement('button');
$selectedButton.className = 'pagination-button-selected';
$selectedButton.innerText = `${currentPage}`;

const $pageNumber = document.createElement('div');

const $button = document.createElement('button');
$button.className = 'pagination-button';
$button.innerText = `${currentPage + 1}`;
$button.addEventListener('click', () => next());

$pageNumber.appendChild($selectedButton);
$pageNumber.appendChild($button);
$pagination.appendChild($pageNumber);

// const $buttonForNextArrow = document.createElement('button');

const $arrowNext = document.createElement('img');
$arrowNext.className = 'arrowNext';
$arrowNext.src = 'assets/svg/arrowLeft.svg';

$pagination.appendChild($arrowNext);

$arrowPrev.addEventListener('click', (e) => {
  prev();
});


const prev = () => {

  if (currentPage > 1) {
    currentPage--;
    changePage(currentPage);

    if (currentPage === 1) {
      $arrowPrev.style.transform = 'none';
      $arrowPrev.src = 'assets/svg/arrowRight.svg';
    }

    $arrowNext.src = 'assets/svg/arrowLeft.svg';
    $arrowNext.style.transform = 'none';
  }
};

$arrowNext.addEventListener('click', (e) => {
  next();
});

const next = () => {

  if (currentPage < arr.length) {
    currentPage++;
    changePage(currentPage);

    $arrowPrev.src = 'assets/svg/arrowLeft.svg';
    $arrowPrev.style.transform = 'rotate(180deg)';

  } else if (currentPage === arr.length) {
    currentPage++;
    changePage(currentPage);

    $arrowNext.src = 'assets/svg/arrowRight.svg';
    $arrowNext.style.transform = 'rotate(180deg)';

  }
};

const changePage = (currentPage) => {
  $selectedButton.innerText = `${currentPage}`;
  $button.innerText = `${currentPage + 1}`;
  $button.style.opacity = 1;
  $button.style.cursor = 'pointer';

  if (currentPage === 20) {
    $button.style.opacity = 0;
    $button.style.cursor = 'default';
  }
};

let currentRowsPerPage = 10;
const $paginationCount = document.querySelector('.pagination__count');
const $rowsPerPage = document.createElement('span');
$rowsPerPage.className = 'pagination__rows-per-page';
$rowsPerPage.innerHTML = `1-${currentRowsPerPage} of 20`;
$paginationCount.appendChild($rowsPerPage);

const $selectedRowsPerPage = document.querySelector('.pagination-select');

$selectedRowsPerPage.addEventListener('change', () => {
  currentRowsPerPage = $selectedRowsPerPage.value;
  $rowsPerPage.innerHTML = `1-${currentRowsPerPage} of 20`;
});
