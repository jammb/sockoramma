$(document).ready(function(){
    var pageNumber = 1

    $('#radios').radiosToSlider();

    $('#backButton').on('click', function() {
        if (!$('.customerInformation').hasClass('hidden')) {
            window.location.href = 'index.html'
        } else if ($('.customerInformation').hasclass('hidden')) {
            $('.customerInformation').removeClass('hidden')
            $('.payment').addClass('hidden')            
        }

    })

    $('#continueButton').on('click', function() {
        if ($('.payment').hasClass('hidden')) {
            $('.customerInformation').addClass('hidden')
            $('.payment').removeClass('hidden')
            alert(pageNumber)
            pageNumber = 2
            // $('#shippingRadio').prop('checked', false)
            $('#shippingRadio').prop('checked', false).checkboxradio('refresh')
            $("#paymentRadio").prop("checked", true).checkboxradio('refresh')
            // $('#shippingRadio')[0].checked = false
        } else if (pageNumber === 2) {
            alert(pageNumber)
            $('.payment').addClass('hidden')
            pageNumber = 3
            // $('.customerInformation').removeClass('hidden')
        }
    })

})

var pageNumber = 1


// document.querySelector('#continueButton').addEventListener('click', continueButton)
var continueButton = document.querySelector('#continueButton')
var backButton = document.querySelector('#backButton')
var customerInfoScreen = document.querySelector('.customerInformation')
var paymentScreen = document.querySelector('.payment')
var shippingRadio = document.querySelector('#shippingRadio')
var paymentRadio = document.querySelector('#paymentRadio')
continueButton.addEventListener('click', continueFunction)
backButton.addEventListener('click', backFunction)

// var pageNumber
// 1 is shipping
// 2 is credit card
// 3 is confirm

// function backFunction() {
//     alert(thisVar)
//     if (pageNumber === 1) {
//      document.querySelector('.customerInformation').classList.add('hidden')
//     } else if (pageNumber === 2) {
//     customerInfoScreen.classList.add('hidden')
//     paymentScreen.classList.remove('hidden')
//     } else if (pageNumber === 3) {

//     }
// }

// function continueFunction() {
//     if (pageNumber === 1) {
//         customerInfoScreen.classList.add('hidden')
//         paymentScreen.classList.remove('hidden')
//         pageNumber = 2;
//         shippingRadio.checked = false;
//         paymentRadio.checked = true;
//     } else if (pageNumber === 2) {
//         paymentScreen.classList.add
//     }
// }