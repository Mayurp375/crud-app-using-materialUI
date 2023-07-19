
import { Component, Inject,OnInit} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EmployeeService } from '../service/employee.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

import{MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-cmp-add-edit',
  templateUrl: './cmp-add-edit.component.html',
  styleUrls: ['./cmp-add-edit.component.scss']
})
export class CmpAddEditComponent implements OnInit {
  empForm!: FormGroup;
  education: string[] = [
    'Matric', 'Highschool', 'Deploma', 'Graduation', 'Post-Graduation'
  ]

  constructor(
    private fb: FormBuilder ,
    private empService: EmployeeService,
    private dialogRef : MatDialogRef<CmpAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {
    this.empForm = this.fb.group({
      firstName: '',
      lastname: '',
      email: '',
      dob: '',
      education: '',
      company: '',
      experience: '',
      package: '',
      gender:'',
      action:'',
    })
  }
  ngOnInit(): void {
   this.empForm.patchValue(this.data);
  }

  onFormSubmit(){
    if(this.empForm.valid){
      this.empService.addEmployee(this.empForm.value).subscribe({
        next:(val:any)=>{
          console.log(this.empForm.value);
          alert('Emlopyee added succesfully');
          this.dialogRef.close(true);
        },
        error:(err:any)=>{
          console.error(err);
        }
      })
    }
  }
 

}
