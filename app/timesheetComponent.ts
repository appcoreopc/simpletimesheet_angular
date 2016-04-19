import {Component, Input, Output, EventEmitter } from 'angular2/core';
import 'rxjs/Rx'; import 'rxjs/Rx';	
import { Employee } from 'app/Employees';
import { Timesheet } from 'app/timesheet';

@Component({
    selector: 'timesheetEntry',
    templateUrl : 'app/timesheetEntry.html', 

})

export class TimeSheetEntryComponent
{	

    @Input() selectedEmployee: Employee; 

    @Input() timesheetExist: boolean; 

    @Output() onTimesheetSaved = new EventEmitter<Timesheet>();

    currentTimesheet : Timesheet = new Timesheet();

    previousEmployeeId: number = -1;

    ngOnInit()
    {
		
    }

    ngOnChanges()
    {
    }

    ngAfterContentChecked()
    {
		
    }

	saveTimesheet() {

		this.previousEmployeeId = this.selectedEmployee.id;
		this.currentTimesheet.id = this.selectedEmployee.id; 
		this.currentTimesheet.name = this.selectedEmployee.name;
		this.onTimesheetSaved.emit(this.currentTimesheet);
		this.selectedEmployee = null;
	}

	clearTimesheet()
	{
		this.currentTimesheet.monday = "";
		this.currentTimesheet.tuesday = "";
		this.currentTimesheet.wednesday = "";
		this.currentTimesheet.thursday = "";
		this.currentTimesheet.friday = "";
		this.currentTimesheet.saturday = "";
		this.selectedEmployee = null;
	}
}