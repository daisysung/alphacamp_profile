$(function(){
  "use strict";
  /* Start of your code */
  console.log('The script is running');
  

  let navigationalLinks = document.querySelectorAll('.nav-link');
  let navbarElement = document.querySelector('.navbar');
  let colorArray = ['bg-dark', '#ff9999', '#00cc66', '#0000ff', '#6600cc'];
  
  for (let i = 0; i < navigationalLinks.length; i++){
  	console.log(navigationalLinks[i]);

  	navigationalLinks[i].onclick = function () {
  		navbarElement.classList.remove('bg-dark'); // Disable the default colour
      navbarElement.style.backgroundColor=colorArray[i];
      console.log(i);
      console.log(navbarElement.style.backgroundColor);
  	}
  }

  $('.work-item').on('click', function (event) {
    let image = $(event.currentTarget).find('img'); // find the image that triggered the modal
    let imageSource = image.attr('src'); // get the source of the image
    let imageno = $(event.currentTarget).data('name'); //find data name of the image
    console.log(imageno);
    $('.modal-title').text("Image #" + imageno); //display title of image = Image #&data name
    $('.modal-body img').attr('src', imageSource); // assign the modal source to the image source
  })
  
  //Ajax call
  $.ajax({
    url:'https://reqres.in/api/unknown',
    data:'',
    type:'GET',
    dataType: 'json'
  }).done(function(json) {
    console.log(json);
    if (json.data !== undefined) {
      for (let i = 0; i < json.data.length; i++) {
        let newOption = $('<option>')
          .attr('value', json.data[i].color)
          .text(json.data[i].name);
          
        newOption.appendTo($('#colours'));
      }
    }
    
    $('#colours').on('change', function () {
      $('#message').css('background-color', $('#colours').val() );   
    });

  });


let formElement = document.querySelector('form');
let textElement = document.querySelector('#message');
let validationMessageElement = document.querySelector('#msgError');
    
    formElement.addEventListener('submit', function (event) {
    // First, prevent the form from submitting
    event.preventDefault();
    formElement.classList.remove('invalid');

  //execute function after 10ms
    window.setTimeout(function () {
      if (textElement.value === '') {
        // If the message is empty, make the error visible
        validationMessageElement.classList.remove('d-none');
        formElement.classList.add('invalid');
      } else {
        // If not empty, hide the error...
        validationMessageElement.classList.add('d-none');
        // And submit the form
        formElement.submit();
      }
    }, 10);

  });
  /* End of your code */
});