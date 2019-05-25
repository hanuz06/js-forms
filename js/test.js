$(document).ready(function(){

	var myModule = (function(){

		// Переменные модуля
		var _form = $('#form'),
			 _yourEmail = $('input[type=email]'),
			 _yourPassword = $('input:password'),
			 _button = $('a.button'),
			 isValid = true;
		

		// Метод инициализации (запуска) модуля
		var init = function(){
			_setUpListeners(); // Запускаем прослушку событий
		};

		// Метод прослушки событий 
		// В нем прослушиваем события на странице, например клики по кнопкам, и при срабатывании события запускаем нужный метод нашего модуля
		var _setUpListeners = function(){
			_button.on('click', function(event){
				_formValidation(event);
			});
		}

		Приватные методы
    
		var _formValidation = function (event) {
    		
			console.log('Hello from _formValidation()');
			var emailVal = _yourEmail.val().trim(),
			 	passwordVal = _yourPassword.val().trim();
			 	//inputs = _form.find('input');

			 if (emailVal.length ==0){
			 	$('#emailError').fadeIn(1000);
			 	event.preventDefault();
			 } else {
			 	$('#emailError').fadeOut(1000);
			 };

			 if (passwordVal.length == 0){
			 	$('#passwordError').fadeIn(1000);
			 	event.preventDefault();
			 } else {
			 	$('#passwordError').fadeOut(1000);
			 	
			 });
			 	

				}
			}

		// Возвращаем публичные методы, которые будут доступны снаружи
		return {
			init
		}
	
	}());
  
	// Запускаем модуль
	myModule.init();

});