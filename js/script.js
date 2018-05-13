$(document).ready(function() {

    $('[data-toggle="tooltip"]').tooltip({});

    $('[data-toggle="popover"]').popover({
        placement: 'top',
        animation: 'fade',
        trigger: 'hover'
    });

    $('.show-tooltips').click(function(){
        $('#about [data-toggle="tooltip"]').tooltip('toggle');
    });

    $('#product-modal').on('show.bs.modal', function(evt){
        var $button = $(evt.relatedTarget);
        var $product = $button.closest('.thumbnail');

        var productName = $product.find('h3').text();
        var productImg = $product.find('img').attr('src');
        var productDesc = $product.find('p').text();

        var $modal = $(this);
        $modal.find('.modal-title').text(productName);
        $modal.find('.modal-body img').attr('src', productImg);
        $modal.find('.modal-body p').text(productDesc);
    });

    $('#contact-form').submit(function(evt){
        evt.preventDefault();

        var $btn = $(this).find('button');
        $btn.button('loading');

        setTimeout(function(){
            //$btn.button('sent');
            $btn.button('reset');
        }, 2000);
    });

});