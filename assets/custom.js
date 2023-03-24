/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 *
 * If you just want to force refresh the mini-cart without adding a specific product, you can trigger the event
 * "cart:refresh" in a similar way (in that case, passing the quantity is not necessary):
 *
 * document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
 *   bubbles: true
 * }));
 */

$(".ProductForm__AddToCart, .aod_buynow.product_buynow").click(function(e){
  if($('.ProductForm__SelectedValue').html() == '*Select Color'){
    $('.select_message').remove();
    e.preventDefault();
    e.stopPropagation();
    $('.ProductForm__AddToCart').after( "<span class='select_message'>Select a shade variant</span>" );
    $('html, body').animate({
      scrollTop: $("#product_options_section").offset().top - 200
    }, 700);
  }
});

$(".aod_buynow.grid_item").click(function(e){
  if(!$(this).parents('form').find('.ProductItem__ColorSwatchList input').is(':checked')){
    $('.select_message').remove();
    e.preventDefault();
    e.stopPropagation();
    $(".select_message").hide();
    $(this).after( "<span class='select_message'>Select a shade variant</span>" );
  }
});

$('.ColorSwatchList .HorizontalList__Item, .ProductItem__ColorSwatchItem').click(function (e) {
  $(".select_message").hide();
});

