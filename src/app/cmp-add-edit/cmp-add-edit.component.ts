import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  constructor(private fb: FormBuilder) {
    this.empForm = this.fb.group({
      firstName: '',
      lastname: '',
      email: '',
      dob: '',
      education: '',
      company: '',
      experience: '',
      package: '',
    })
  }
}
