// const preloader = document.querySelector('#preloader')
// const preloaderFunc = () => {
// 	setTimeout(function () {
// 		console.log(preloader)
// 		preloader.style.display = 'none'
// 	}, 1720)
// }
// preloaderFunc()

const BOOKSY = 'https://booksy.com/pl-pl/17197_panda-masaz_masaz_10729_rzeszow'
// document.querySelector(".btn-redirect-to-booksy").onclick = function () {
//     location.href = BOOKSY;
// };

document.querySelectorAll('[data-dialog]').forEach(button => {
	button.addEventListener('click', () => {
		console.log('sjkpw')
		const dialog = document.querySelector(`#${button.dataset.dialog}`)
		dialog.showModal()

		document.body.style.overflow = 'hidden'
		document.documentElement.style.overflow = 'hidden'

		dialog.querySelector('.closeDialog').addEventListener('click', () => {
			dialog.close()
			document.body.style.removeProperty('overflow')
			document.documentElement.style.removeProperty('overflow')
		})
	})
})
