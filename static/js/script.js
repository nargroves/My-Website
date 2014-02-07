

// SCROLLING
$(function() {
  $('#topnav a, .site-title').on('click', function(e) {
    e.preventDefault();
    var scrolldiv = $(this).attr('href');
    $(scrolldiv).animatescroll({ padding:50 });
  });
});

$(window).scroll(function() {
if ($(".navbar").offset().top > 30) {
    $(".navbar-fixed-top").addClass("sticky");
}
else {
    $(".navbar-fixed-top").removeClass("sticky");
  }
});


// PLUGINS
var map;
$(document).ready(function() {
  
  // activate the second carousel
  $('#slider-carousel').carousel({ interval: false });
  $('#testimonials-carousel').carousel({ interval: false });
  
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


(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-17852816-3', 'benshope.com');
ga('send', 'pageview');

