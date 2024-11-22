const preloader = document.querySelector('#preloader');
  const preloaderFunc = () => {
    
    setTimeout(function () {
        console.log(preloader);
       preloader.style.opacity = "0";
      }, 1720);
  }
  preloaderFunc();