// 사이드 탭메뉴

const sideMenus = document.querySelectorAll('.side_menu');
const wraps = document.querySelectorAll('.wrap');

sideMenus.forEach((menu, index) => {
  menu.addEventListener('click', (event) => {
    event.preventDefault();

    wraps.forEach((wrap) => {
      wrap.classList.remove('active');
    });

    const selectedIndex = index % wraps.length;
    wraps[selectedIndex].classList.add('active');
  });
});


// 장바구니 , 계산서 , 직원호출 탭메뉴 

const helpWraps = document.querySelectorAll('.wrap');

helpWraps.forEach((wrap) => {
  const staffBtn = wrap.querySelector('.footer_btn.call_staff_btn');
  const callWrap = wrap.querySelector('.call_staff');
  const tabWrap = wrap.querySelector('.tab_menu-rigth')
  const close = wrap.querySelector('.call_close');
  const close2 = wrap.querySelector('.tab_close ')
  const sideBtn = wrap.querySelector('.side_bar_btn')
  const billBtn = wrap.querySelector('.bill_btn')
  const close3 = wrap.querySelector('.bill_close')
  const billWrap = wrap.querySelector('.bill_wrap')

  staffBtn.addEventListener('click', () => {
    callWrap.classList.add('active');
  });

  close.addEventListener('click', () => {
    callWrap.classList.remove('active');
  });
  sideBtn.addEventListener('click', () => {
    tabWrap.classList.add('active');
  });

  close2.addEventListener('click', () => {
    tabWrap.classList.remove('active');
  });

  billBtn.addEventListener('click', () => {
    billWrap.classList.add('active');
  });

  close3.addEventListener('click', () => {
    billWrap.classList.remove('active');
  });
});

// 프린트

function printPage(){
  window.print();
}


let intervalId;

function startCountdown() {
  let seconds = 60;
  const countdown = document.querySelectorAll('.call_counter span');
  const callStaffSections = document.querySelectorAll('.call_staff');

  intervalId = setInterval(() => {
    seconds--;
    countdown.forEach((element) => {
      element.textContent = seconds + '초';
    });

    if (seconds === 0) {
      clearInterval(intervalId);
      callStaffSections.forEach((section) => {
        section.style.display = 'none'; // 직원호출 창 닫기
      });
    }
  }, 1000);
}

function resetCountdown() {
  clearInterval(intervalId);
  startCountdown();
}

document.querySelectorAll('.call_staff_btn').forEach((button) => {
  button.addEventListener('click', () => {
    resetCountdown();
    clearInterval(intervalId);
    startCountdown();
  });
});
