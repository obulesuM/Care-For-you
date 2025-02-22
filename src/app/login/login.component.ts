import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthenticationService } from '@app/_services/authentication.service';
import { ToasterService } from '@app/_services/toaster.service';
import {
  IonContent,
  IonItem,
  IonInput,
  IonButton,
  IonIcon,
  IonImg,
  IonItemOption,
  IonInputPasswordToggle,
  IonRouterLink,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonRouterLink,
    IonImg,
    IonIcon,
    IonButton,
    IonInput,
    IonItem,
    IonContent,
    ReactiveFormsModule,
    FormsModule,
    IonInputPasswordToggle,
    RouterLink,
  ],
})
export class LoginComponent implements OnInit {
  public formData: FormGroup;
  public isLoading: boolean = false;
  public submitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private toast: ToasterService,
    private router: Router
  ) {
    this.formData = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit() {}

  get f() {
    return this.formData.controls;
  }

  public onSubmit() {
    this.submitted = true;
    // console.log(this.f);
    if (this.formData.invalid) {
      return;
    }
    this.authenticationService
      .login(
        this.formData.controls['email'].value,
        this.formData.controls['password'].value
      )
      .subscribe((res) => {
        this.router.navigate([`/${res.role}`]);
        console.log(res);
      });
  }
}
