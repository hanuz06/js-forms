$(document).ready(function() {

    var myModule = (function() {
        // Переменные модуля
        var _form = $('#form'),
            _yourEmail = $('input[type=email]'),
            _yourPassword = $('input:password');


        // Метод инициализации (запуска) модуля
        var init = function() {
            _setUpListeners(); // Запускаем прослушку событий
        };



        //Метод прослушки событий
        //В нем прослушиваем события на странице, например клики по кнопкам, и при срабатывании события запускаем нужный метод нашего модуля
        var _setUpListeners = function() {
            _form.on('submit', function(event) {
                _formValidation(event);
            });
            _yourEmail.on('focus', function(event) {
                _clearEmailError(event);
            });
            _yourPassword.on('focus', function(event) {
                _clearPasswordError(event);
            });

        }

        // Приватные методы

        var _formValidation = function(event) {
            event.preventDefault();
            console.log('Hello from _formValidation()');
            var emailVal = _yourEmail.val().toLowerCase().trim(),
                passwordVal = _yourPassword.val().trim();

            //Проверка пустые поля
            if (emailVal.length == 0) {
                $('#emailError').fadeIn(600);
                event.preventDefault();
            } else {
                $('#emailError').fadeOut(600);
            };

            if (passwordVal.length == 0) {
                $('#passwordError').fadeIn(600);
                event.preventDefault();
            } else {
                $('#passwordError').fadeOut(600);
            }

            //Проверка на правильный формат email
            if (emailVal !== '') {
                var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
                if (pattern.test(emailVal)) {
                    $('#wrongEmailFormat').fadeOut(600);
                    var valid = true;
                } else {
                    $('#wrongEmailFormat').fadeIn(600);
                    console.log('Email is INVALID');
                    event.preventDefault();
                    valid = false;
                }

                //Проверка на правильность введения email адреса и пароля
                if (valid == true) {
                    if ((emailVal === "mail@mail.com") && (passwordVal == 123)) {
                        $('#enterInstruction').fadeOut(600);
                        console.log('Email and password is CORRECT');
                        _form.unbind("submit").submit();

                    } else {
                        $('#enterInstruction').fadeIn(600);
                        console.log('Email and password is NOT CORRECT');
                        event.preventDefault();

                    }
                }


            }

        };

        // При фокусе сообщения об ошибке удаляются

        var _clearEmailError = function(event) {
            event.preventDefault();
            $('#emailError').fadeOut(600);
            $('#wrongEmailFormat').fadeOut(600);
            $('#enterInstruction').fadeOut(600);
        }

        var _clearPasswordError = function(event) {
            event.preventDefault();
            $('#passwordError').fadeOut(600);
            $('#enterInstruction').fadeOut(600);
        }

        // Возвращаем публичные медоты, которые будут доступны снаружи
        return {
            init
        }

    }());

    // Запускаем модуль
    myModule.init();

});