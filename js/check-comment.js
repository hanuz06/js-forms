$(document).ready(function(){

	var myModule = (function(){

		// Переменные модуля
		var _form = $('#comment-form');
		var _commentTextarea = $('#commentText');
		var _commentErrorEmpty = $('#commentErrorEmpty');

		// Метод инициализации (запуска) модуля
		var init = function(){
			_setUpListeners(); // Запускаем прослушку событий
		}

		// Метод прослушки событий
		// В нем прослушиваем события на странице, например клики по кнопкам, и при срабатывании события запускаем нужный метод нашего модуля
		var _setUpListeners = function(){
			_form.on('submit', function(event){
				_formValidation(event);
			});
		}

		// Приватные методы
    
		var _formValidation = function (event) {
    		//event.preventDefault();
			console.log('Hello from _formValidation()');

			if (_commentTextarea.val().trim().length==0){
				_commentErrorEmpty.fadeIn(500);
				event.preventDefault();
				
			} else {
				_commentErrorEmpty.fadeOut(500);
				//_form.unbind('submit').submit();
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