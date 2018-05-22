(function(){
  "use strict";
  /* Start of your code */
  console.log('The script is running');

  let navigationalLinks = document.querySelectorAll('.nav-link');

  
  for (let i = 0; i < navigationalLinks.length; i++){
  	console.log(navigationalLinks[i]);

  	navigationalLinks[i].onclick = function () {
  		let navbarElement = document.querySelector('.navbar');
  		navbarElement.style.backgroundColor='red';
  	}
  }
  
  /* End of your code */
})();