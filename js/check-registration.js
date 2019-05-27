$(document).ready(function() {

    var HomeWork3 = (function() {

        // Переменные модуля
        var _form = $('#form'),
            _yourEmail = $('input[type=email]'),
            _yourPassword = $('input:password');

        // Метод инициализации (запуска) модуля
        var init = function() {
            _setUpListeners(); // Запускаем прослушку событий
        }

        // Метод прослушки событий
        // В нем прослушиваем события на странице, например клики по кнопкам, и при срабатывании события запускаем нужный метод нашего модуля
        var _setUpListeners = function() {
            _form
                .on('submit', function(event) {
                    _formValidation(event);
                });

            _yourEmail.on('focus', function(event) {
                _emailFocus(event)
            }); //При фокусе удаляет все сообщения об ошибке

            _yourPassword.on('focus', function(event) {
                _passwordFocus(event)
            }); //При фокусе удаляет все сообщения об ошибке
        }


        // Приватные методы

        var _formValidation = function(event) {
            event.preventDefault();
            console.log('Hello from _actionOnClick()');
            var inputs = _form.find('input.input-form-registration');

            //Проверка пустые поля

            $.each(inputs, function(index, val) {
                var input = $(val),
                    value = input.val().trim(),
                    label = $(input).attr('placeholder').toLowerCase(),
                    inputType = $(input).attr('type') + "Error",
                    textError = 'Введите ' + label,
                    tooltip = $('<span class="form__tooltip">' + textError + '</span>'),
                    errorMessage = $('#' + inputType);


                //Проверка полей на заполненность 

                if (value.length == 0) {
                    errorMessage.empty();
                    errorMessage.fadeIn(700);
                    errorMessage.addClass("notify notify--error mb-20");
                    tooltip.appendTo(errorMessage);
                    event.preventDefault();
                } else {
                    errorMessage.empty();
                    errorMessage.fadeOut(700);
                    errorMessage.removeClass("notify notify--error mb-20");
                }


                //Проверка на соответствие email формату

                if (input.attr('type').toLowerCase() === 'email' && ($("input:password").val() != "")) {
                    if (value !== '') {
                        var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
                        if (pattern.test(value)) {
                            $('#wrongEmailFormat').fadeOut(600);
                            var valid = true;
                        } else {
                            $('#wrongEmailFormat').fadeOut(600);
                            $('#wrongEmailFormat').fadeIn(600);
                            console.log('Email is INVALID');
                            event.preventDefault();
                            console.log('FALSE FALSE FALSE');
                            valid = false;
                        }
                    }
                    console.log('VALIDVALID= ' + valid);
                }

                //Проверка на правильность введения email адреса и пароля

                if (valid == true) {
                    if (value === "mail@mail.com") {
                        console.log('Email IS CORRECT');
                        $('#emailInstruction').fadeOut(600);
                        _form.unbind('submit').submit();

                    } else {
                        console.log('Email IS NOT CORRECT');
                        event.preventDefault();
                        $('#emailInstruction').fadeIn(600);
                    }
                }

            })
        };

        // При фокусе удаляются сообщения об ошибке

        var _emailFocus = function(event) {
            event.preventDefault();
            $("#emailError").fadeOut(600);
            $('#emailInstruction').fadeOut(600);
            $('#wrongEmailFormat').fadeOut(600);
        }

        var _passwordFocus = function(event) {
            event.preventDefault();
            $("#passwordError").fadeOut(600);
        }

        // Возвращаем публичные методы, которые будут доступны снаружи
        return {
            init
        }

    }());

    // Запускаем модуль
    HomeWork3.init();

});