import { Component } from 'angular2/core';
import {Http, Response} from 'angular2/http';
import 'rxjs/Rx'; import 'rxjs/Rx';
import { TimeSheetEntryComponent } from 'app/timesheetComponent';
import { Employee } from 'app/Employees';


@Component({
    selector: 'my-app',
    templateUrl : 'app/app.component.html', 
    directives: [TimeSheetEntryComponent]
})	

export class AppComponent {

	employees: Employee[]; 
	selectedEmployee : Employee;

	ngOnInit()
	{
		this.getEmployee();
	}

	constructor(private http : Http)
	{

	}

	getEmployee() {

		this.http.get("app/person.json").map((res: Response) => <Employee[]>res.json()).subscribe(
		data => 
		{
			this.employees = data;
		},
		err => console.log(err),
		() => { console.log('done!'); console.log(this.employees); });
	};

	addTimeSheet(emp : Employee)
	{
		this.selectedEmployee = emp;
		console.log(emp);
	}
}