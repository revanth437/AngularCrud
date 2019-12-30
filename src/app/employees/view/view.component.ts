import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../../employee.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  employees;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
     this.fetchData();
  }

  fetchData(){
    this.employeeService.getAll().subscribe(data => {
      this.employees = data;
      
    });

  }
 
  deleteEmployeesonClick(i){
    console.log(this.employees);
    console.log(this.employees[i]);
    this.employeeService.deleteEmployee(this.employees[i]._id).subscribe(
      () => {
        this.fetchData();
      },
      (err) => console.log(err)
    );
    
  
  }
   
}
