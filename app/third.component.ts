import {Component} from 'angular2/core';

@Component ({
	selector : 'myapp3',
	templateUrl : "app/ctrltemplate.html"
})

export class ThirdComponent {

	name = 'jeremy';
	sex = 'Male';
	race = "chinesee";
	heros = [{ id : 1,  name : 'superman'}, { id : 2, name : 'batman'}];

	sayHello() {
		console.log('helloooo');
	}

}


