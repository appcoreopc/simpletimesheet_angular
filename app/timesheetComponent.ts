import {Component, Input, Output} from 'angular2/core';
import 'rxjs/Rx'; import 'rxjs/Rx';	
import { Employee } from 'app/Employees';
import { Timesheet } from 'app/timesheet';

@Component({
    selector: 'timesheetEntry',
    templateUrl : 'app/timesheetEntry.html'
})

export class TimeSheetEntryComponent
{ 
    @Input() selectedEmployee: Employee; 

    currentTimesheet : Timesheet = new Timesheet();

	saveTimesheet() {
		console.log(this.currentTimesheet);
	}
}