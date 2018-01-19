const $emailSubmit = $('.email-submit');
const $pinInput = $('.pin-input');
const pin = Math.random().toFixed(4) * 10000;

$('<span class="is-human-pin"></span>').appendTo('.is-human');
$('.is-human-pin').text(`${pin}`);

function isPinInvalid() {
    let input = $pinInput.val();
    return parseInt(input) !== pin;
}
function validateSubmitBtn() {
    // isPinInvalid ? $emailSubmit.attr('disabled', '') : $emailSubmit.removeAttr('disabled') ;
    $emailSubmit.prop('disabled', isPinInvalid)
}
$pinInput.on('keyup', validateSubmitBtn);