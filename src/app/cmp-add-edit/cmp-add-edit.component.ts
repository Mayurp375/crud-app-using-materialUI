import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../service/employee.service';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-cmp-add-edit',
  templateUrl: './cmp-add-edit.component.html',
  styleUrls: ['./cmp-add-edit.component.scss']
})
export class CmpAddEditComponent {
  empForm!: FormGroup;
  education: string[] = [
    'Matric', 'Highschool', 'Deploma', 'Graduation', 'Post-Graduation'
  ]

  constructor(private fb: FormBuilder ,private empService: EmployeeService,private dialogRef : DialogRef<CmpAddEditComponent>) {
    this.empForm = this.fb.group({
      firstName: '',
      lastname: '',
      email: '',
      dob: '',
      education: '',
      company: '',
      experience: '',
      package: '',
      gender:''
    })
  }

  onFormSubmit(){
    if(this.empForm.valid){
      this.empService.addEmployee(this.empForm.value).subscribe({
        next:(val:any)=>{
          console.log(this.empForm.value);
          alert('Emlopyee added succesfully');
          this.dialogRef.close();
        },
        error:(err:any)=>{
          console.error(err);
        }
      })
    }
  }
}
