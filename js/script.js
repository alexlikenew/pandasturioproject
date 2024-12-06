// const preloader = document.querySelector('#preloader')
// const preloaderFunc = () => {
// 	setTimeout(function () {
// 		console.log(preloader)
// 		preloader.style.display = 'none'
// 	}, 1720)
// }
// preloaderFunc()

const BOOKSY = "https://booksy.com/pl-pl/17197_panda-masaz_masaz_10729_rzeszow";
document.querySelector(".btn-redirect-to-booksy").onclick = function () {
    location.href = BOOKSY;
};
