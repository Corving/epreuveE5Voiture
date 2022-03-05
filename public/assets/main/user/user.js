// vérification de l'enregistrement des utilisateurs

$('#register-user').click(function () {
    var firstname = $('#firstname').val();
    var lastname = $('#lastname').val();
    var email = $('#email').val();
    var password = $('#password').val();
    var passwordConfirm = $('#passwordConfirm').val();
    var passwordLength = password.length;
    var agreeTerms = $('#agreeTerms');

    if (firstname != "" && /^[a-zA-Z ÀÁÂÃÄÅàáâãäåÒÓÔÕÖØòóôõöøÈÉÊËèéêëÇçÌÍÎÏìíîïÙÚÛÜùúûüÿÑñ]+$/.test(firstname)) {
        $('#firstname').removeClass('is-invalid');
        $('#firstname').addClass('is-valid');
        $('#error-register-firstname').text("");

        if (lastname != "" && /^[a-zA-Z ÀÁÂÃÄÅàáâãäåÒÓÔÕÖØòóôõöøÈÉÊËèéêëÇçÌÍÎÏìíîïÙÚÛÜùúûüÿÑñ]+$/.test(lastname)) {
            $('#lastname').removeClass('is-invalid');
            $('#lastname').addClass('is-valid');
            $('#error-register-lastname').text("");

            if (email != "" && /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/.test(email)) {
                $('#email').removeClass('is-invalid');
                $('#email').addClass('is-valid');
                $('#error-register-email').text("");

                if (passwordLength >= 8) {
                    $('#password').removeClass('is-invalid');
                    $('#password').addClass('is-valid');
                    $('#error-register-password').text("");


                    if (password == passwordConfirm) {
                        $('#passwordConfirm').removeClass('is-invalid');
                        $('#passwordConfirm').addClass('is-valid');
                        $('#error-register-passwordConfirm').text("");

                        if (agreeTerms.is('checked')) {
                            $('#agreeTerms').removeClass('is-invalid');
                            $('#error-register-agreeTerms').text("");

                            // envoie du form
                            $('#form-register').submit();

                        } else {
                            $('#agreeTerms').addClass('is-invalid');
                            $('#error-register-agreeTerms').text("You should agree to our terms and condition !");
                        }

                    } else {
                        $('#passwordConfirm').removeClass('is-valid');
                        $('#passwordConfirm').addClass('is-invalid');
                        $('#error-register-passwordConfirm').text("Your passwords must be identical !");
                    }

                } else {
                    $('#password').removeClass('is-valid');
                    $('#password').addClass('is-invalid');
                    $('#error-register-password').text("Your password must be at last 8 characters !");
                }

            } else {
                $('#email').removeClass('is-valid');
                $('#email').addClass('is-invalid');
                $('#error-register-email').text("Email is not valid !");
            }

        } else {
            $('#lastname').removeClass('is-valid');
            $('#lastname').addClass('is-invalid');
            $('#error-register-lastname').text("Last Name is not valid !");
        }

    } else {
        $('#firstname').removeClass('is-valid');
        $('#firstname').addClass('is-invalid');
        $('#error-register-firstname').text("First Name is not valid !");
    }

});

$('#agreeTerms').change(function (){

    var agreeTerms = $('#agreeTerms');

    if(agreeTerms.is(':checked')){
        $('#agreeTerms').removeClass('is-invalid');
        $('#error-register-agreeTerms').text("");

    }else{
        $('#agreeTerms').addClass('is-invalid');
        $('#error-register-agreeTerms').text("You should agree to our terms and condition !");
    }
});
