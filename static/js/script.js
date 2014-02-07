/*
 * All the plugins init are in this file
 **/
var map;
$(document).ready(function() {
  
  // activate the second carousel
  $('#slider-carousel').carousel();
  $('#testimonials-carousel').carousel();
  
  // init the google map plugin
  map = new GMaps({
    el: '#map',
    lat: 37.3894,
    lng: -122.0819
  });
  map.setContextMenu({
    control: 'map',
    options: [{
      title: 'Add marker',
      name: 'add_marker',
      action: function(e){
        this.addMarker({
          lat: e.latLng.lat(),
          lng: e.latLng.lng(),
          title: 'New marker'
        });
        this.hideContextMenu();
      }
    }, {
      title: 'Center here',
      name: 'center_here',
      action: function(e){
        this.setCenter(e.latLng.lat(), e.latLng.lng());
      }
    }]
  });
  map.setContextMenu({
    control: 'marker',
    options: [{
      title: 'Center here',
      name: 'center_here',
      action: function(e){
        this.setCenter(e.latLng.lat(), e.latLng.lng());
      }
    }]
  });

  // sliding form
  $('.contact-form-btn').click( function(){
    if($(this).hasClass('closes')) {
      $('.contact-form-inner').slideDown();
      $(this).removeClass('closes').addClass('open');
    } else {
      $('.contact-form-inner').slideUp();
       $(this).removeClass('open').addClass('closes');
    }
  });
  
  // ajax contact form
  $('#contact-form').submit(function(){
      $('#contact-form button').html('Sending...')
      $.post('mail', $(this).serialize(), function(data) {
        $('#contact-form').html(data);
        $('#contact-form input, #contact-form textarea').val('');
      });
      return false;
  });
});