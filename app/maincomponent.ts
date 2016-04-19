import { Component } from 'angular2/core';
import {Http, Response} from 'angular2/http';
import 'rxjs/Rx'; import 'rxjs/Rx';
import { TimeSheetEntryComponent } from 'app/timesheetComponent';
import { Employee } from 'app/Employees';
import { Timesheet } from 'app/timesheet';

@Component({
    selector: 'my-app',
    templateUrl : 'app/app.component.html', 
    directives: [TimeSheetEntryComponent]
})	

export class AppComponent {

	employees: Employee[]; 
	selectedEmployee : Employee;
	savedTimesheet: number[] = [];
	hideIt: boolean = false;
	timesheetEntered: boolean = false;

	ngOnInit()
	{
		this.getEmployee();
	}
	
	handleTimeSheetChanged(timesheet : Timesheet)
	{
		console.log(timesheet);
		
		if (this.findSaveTimesheet(timesheet.id))
		{
			this.savedTimesheet.push(timesheet.id);
			console.log(this.savedTimesheet);
		}
	}

	findSaveTimesheet(id : number)
	{
		var index: number = this.savedTimesheet.indexOf(id, 0);
		if (index != -1)
		{
			return false;
		}
		return true; 
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
		if (!this.findSaveTimesheet(emp.id)) {
			this.timesheetEntered = true;
		}
		else {
			this.timesheetEntered = false;
		}
	};
}