		 $('.pop-error').css('opacity','0');
        $('.btn-submit').attr('disabled',true);
        $('.iphone').keyup(function () {
            console.log($('.iphone').val());
            var re = /13[123569]{1}\d{8}|15[1235689]\d{8}|18\d{9}/;
            if(re.test($('.iphone').val())){
                console.log('true');
                $('.pop-error').css('opacity','0');
                $('.btn-submit').removeAttr('disabled');
            }else {
                console.log('false');
                $('.pop-error').css('opacity','1');
            }
        });
        
