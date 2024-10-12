$(document).ready(function () {
    $('#home').show();
    $(".down a").on('click', function (e) {
        e.preventDefault();
        $('.hide').removeClass('show').hide();
        var targets = $(this).data('target');
        $('#' + targets).addClass('show').show();
        $(".down a").removeClass('color');
        $(this).addClass('color');
        // $(this).addClass('color').sibling().removeClass('color');
    });
    
    $('#submit').click(function () {
        
        var question = $("#chatbot").val();
        $('#textarea').val($('#textarea').val() + "\n" + question);
        $("#chatbot").val(' ')
        
    });
    $('#show_menu').click(function () {
        $('.main_filter').addClass('show_filter');
    });
    $('#close , #filter').click(function () {
        $('.main_filter').removeClass('show_filter');
    });

});




const galleryContainer = document.querySelector('.gallery-container');
const gallery = document.querySelector('.gallery');

galleryContainer.addEventListener('mousemove', (e) => {
    const containerWidth = galleryContainer.offsetWidth;
    const galleryWidth = gallery.scrollWidth;
    const mouseX = e.clientX - galleryContainer.offsetLeft;
    const scrollX = ((mouseX / containerWidth) * galleryWidth - containerWidth / 1)/1;
    galleryContainer.scrollLeft = scrollX;
});

