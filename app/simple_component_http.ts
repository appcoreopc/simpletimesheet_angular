import {Http, Response} from 'angular2/http';
import {Component} from 'angular2/core';
import {Article} from 'app/article';
import 'rxjs/Rx'; import 'rxjs/Rx';

@Component({
    selector: 'my-simple-component-limitation-offset-is-there-one',
    template: '<h1> Stock App </h1> <div>testing for sure : {{ info?.title }}</div>'
})


export class SimpleComponentHttp 
{ 
   
    info: Article;

    ngOnInit()
    {
		this.getStock();
    }

	constructor(private http : Http)
	{
		console.log("fire up!!");
	}

	getStock() {

	this.http.get("http://jsonplaceholder.typicode.com/posts/1").map((res: Response) => <Article>res.json()).subscribe(
	data => {

		this.info = new Article(data.id, data.title, data.title);
	},
		err => console.log(err),
		() => console.log('done!'));
		};

}
