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

  $('#imageModal').on('show.bs.modal', function (event) {
  var image = $(event.relatedTarget) // Image that triggered the modal
  var recipient = image.data('name') // Extract info from data-* attributes

  console.log(recipient);
  //alert("images/porfolio-"+recipient+".jpg");
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text("Image #"+recipient);
  modal.find('.modal-body img').attr('src',"images/porfolio-"+recipient+".jpg");
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
  /* End of your code */
});