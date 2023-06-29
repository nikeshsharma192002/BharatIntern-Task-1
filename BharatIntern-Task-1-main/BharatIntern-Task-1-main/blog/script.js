$(document).ready(function() {
  
  $('#imageUpload').on('change', function() {
    var file = $(this)[0].files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
      var imgSrc = e.target.result;
      var img = $('<img>').attr('src', imgSrc).addClass('img-fluid');
      $('#preview').append(img);
    };
    reader.readAsDataURL(file);
  });

  
  $('#submitBtn').on('click', function(e) {
    e.preventDefault();

    var title = $('#blogTitle').val();
    var content = $('#blogContent').val();
    var videoLink = $('#videoLink').val();

    
    var blogHTML = '<h2>' + title + '</h2>';
    blogHTML += '<p>' + content + '</p>';
    if (videoLink) {
      blogHTML += '<div class="embed-responsive embed-responsive-16by9 mt-3">';
      blogHTML += '<iframe class="embed-responsive-item" src="' + videoLink + '"></iframe>';
      blogHTML += '</div>';
    }

    
    $('#preview').html(blogHTML);
  });
});
