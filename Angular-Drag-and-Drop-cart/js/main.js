(function() {
	'use strict';
    var App = angular
	.module('drag-and-drop', [
		'ngDragDrop'
	]);

    App
	.controller('cartCtrl', cartCtrl);
	
	function cartCtrl($scope, $timeout, $q) {
		var vm = this;
        vm.list = [{
			'id': 1,
			'title': 'Товар 1',
			'desc': 'Краткое описание со всеми его прелестями...',
			'img': '../img/1.jpg',
			'price': '210',
			'count': 8,
			'countchek': 1
			},{
			'id': 2,
			'title': 'Товар 2',
			'desc': 'Краткое описание со всеми его прелестями...',
			'img': '../img/2.jpg',
			'price': '210',
			'count': 8,
			'countchek': 1
			},{
			'id': 3,
			'title': 'Товар 3',
			'desc': 'Краткое описание со всеми его прелестями...',
			'img': '../img/3.jpg',
			'price': '210',
			'count': 8,
			'countchek': 1
			},{
			'id': 4,
			'title': 'Товар 4', 
			'desc': 'Краткое описание со всеми его прелестями...', 
			'img': '../img/4.jpg', 
			'price': '210',
			'count': 8,
			'countchek': 1
			},{
			'id': 5,
			'title': 'Товар 5',
			'desc': 'Краткое описание со всеми его прелестями...',
			'img': '../img/1.jpg',
			'price': '210',
			'count': 8,
			'countchek': 1
			},{
			'id': 6,
			'title': 'Товар 6',
			'desc': 'Краткое описание со всеми его прелестями...',
			'img': '../img/2.jpg',
			'price': '210',
			'count': 8,
			'countchek': 1
			},{
			'id': 7,
			'title': 'Товар 7',
			'desc': 'Краткое описание со всеми его прелестями...',
			'img': '../img/3.jpg',
			'price': '210',
			'count': 8,
			'countchek': 1
			},{
			'id': 8,
			'title': 'Товар 8',
			'desc': 'Краткое описание со всеми его прелестями...',
			'img': '../img/4.jpg',
			'price': '210',
			'count': 8,
			'countchek': 1
			}];	// массив листа товара
        vm.cart = []; // массив корзины
        vm.hideMe = hideMe; // функция показать скрыть placeholder на корзине
		vm.overCart = overCart;	// функция перебора массива с удалением дублей и прибавлением если нужно количества товара	
		vm.plus = plus; // функция прибавление товара в листе товара 
		vm.minus = minus; // функция убавления товара в листе товара
		vm.total = total; // конечная сумма всех товаров и их количества - итого
		vm.deleteCart = deleteCart;	// функция удаления товара из корзины	
		function hideMe() {
			if(vm.total() == 0){
				return false;			
			} else {
				return true;
			}
        }
		function plus($index){
			if(vm.list[$index].count > 0){
				vm.list[$index].count--;
				vm.list[$index].countchek++;
			}
		}
		function minus($index) {
			if(vm.list[$index].countchek > 1){
				vm.list[$index].count++;
				vm.list[$index].countchek--;
			}
		};
		function total(){				
			var total = 0;
			angular.forEach(vm.cart, function(val, key) {
				if(val){
					total += val.price * val.countchek;
				}
			});
			return total; 
		};
		function deleteCart($index) {
			delete vm.cart[$index];
		};
		function overCart(event, ui) { 
			angular.forEach(vm.cart, function(value, key) {
				if(value){
					if(event.toElement.alt == vm.cart[key].title){
						if(vm.cart[key].count != vm.cart[key].countchek && vm.cart[key].count > 0){
							vm.cart[key].countchek++;
							vm.cart[key].count--;
						}else{
							// alert('На складе больше нет товара!');
						};	
					delete vm.cart[key];						
					};
				};
			});
		};
    };
})();