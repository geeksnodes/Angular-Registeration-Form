import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  isMain= true;
  isPreview= false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.isMain= true;
    this.isPreview= false;
    
      this.registerForm = this.formBuilder.group({
          title: ['', Validators.required],
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          comment: ['', Validators.required],
          acceptTerms: [false, Validators.requiredTrue]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  Preview() {
      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      // display form values on success
      this.isMain= false;
      this.isPreview= true;
}

BackMain() {
  this.isMain= true;
  this.isPreview= false;
}
}
