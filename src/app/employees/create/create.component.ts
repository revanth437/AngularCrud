import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from './../../employee.service';
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  employeeForm: FormGroup;
  employeeId: string;
  employeeData: any;
  constructor(private fb: FormBuilder, private employeeService: EmployeeService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => {
      this.employeeId = params.id;
    });
   }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      phoneNumber: ['', [Validators.required, Validators.maxLength(10)]],
      hireDate: [''],
      employementEndDate: [''],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      country: ['', [Validators.required]]
    });
    if (this.employeeId) {
      this.employeeService.getById(this.employeeId).subscribe(data => {
        this.populatevalues(data);

      });
    }
  }
  populatevalues(formValues) {
    this.employeeForm.patchValue(formValues);
  }
  save() {
    if (this.employeeId) {
      this.employeeService.update(this.employeeId, this.employeeForm.value).subscribe(data => {
        this.router.navigate(['/']);
        console.log(data);
        
      });
      return;
    }
    this.employeeService.save(this.employeeForm.value).subscribe(data => {
      this.router.navigate(['/']);
      console.log(data);
    });
  }
}
