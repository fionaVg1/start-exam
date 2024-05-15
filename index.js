// 创建按钮
const createBtn = () => {
  const backToTopBtn = document.createElement('div');
  backToTopBtn.setAttribute('id', 'back-to-top');
  backToTopBtn.innerHTML = `开始考试`
  backToTopBtn.addEventListener('click', onClick);
  return backToTopBtn;
}

const createCloseBtn = () => {
  const closeBtn = document.createElement('div');
  closeBtn.setAttribute('id', 'close-btn');
  closeBtn.innerHTML = `提交考试`
  closeBtn.addEventListener('click', onClose);
  return closeBtn;
}
// 点击事件
const onClick = () => {
  // (function smoothscroll() {
  //   var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
  //   if (currentScroll > 0) {
  //     window.requestAnimationFrame(smoothscroll);
  //     window.scrollTo(0, currentScroll - (currentScroll / 5));
  //   }
  // })();
  alert('开始考试')
}

// 关闭按钮
const onClose = (e) => {
  e.stopPropagation();
  // var backToTopBtn = document.querySelector('#back-to-top');
  // backToTopBtn.style.display = 'none';
  // window.onscroll = null
  var resultInput = document.querySelector('#result');
  alert(`提交考试结果----${resultInput.value}`);
  return
}


// 把按钮插入文档
const injectBtn = () => {
  var body = document.querySelector('body');
  body.appendChild(createBtn());
  body.appendChild(createCloseBtn());
  // displayHandler();
};

// 监听滚动，大于50px才显示按钮
window.onscroll = function (e) {
  // displayHandler()
}

// 控制按钮显示/隐藏
const displayHandler = () => {
  var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
  var backToTopBtn = document.querySelector('#back-to-top');
  if (!backToTopBtn) return
  if (currentScroll > 50) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
}

injectBtn();
