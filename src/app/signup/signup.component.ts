import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { COUNTRIES_LIST } from '@app/_const';
import {
  IonContent,
  IonLabel,
  IonSegment,
  IonSegmentButton,
  IonSegmentContent,
  IonSegmentView,
  IonToolbar,
  IonHeader,
  IonInput,
  IonItem,
  IonInputPasswordToggle,
  IonButtons,
  IonBackButton,
  IonSelect,
  IonSelectOption,
  IonDatetime,
  IonDatetimeButton,
  IonModal,
  IonButton,
  IonFooter,
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonFooter,
    IonBackButton,
    IonButtons,
    IonHeader,
    IonLabel,
    IonSegment,
    IonSegmentButton,
    IonSegmentContent,
    IonSegmentView,
    IonToolbar,
    IonContent,
    IonInput,
    IonItem,
    ReactiveFormsModule,
    FormsModule,
    IonInputPasswordToggle,
    IonButtons,
    IonSelect,
    IonSelectOption,
    IonDatetime,
    IonDatetimeButton,
    IonModal,
    IonButton,
  ],
})
export class SignupComponent implements OnInit {
  public formData: FormGroup;
  public otherForm: FormGroup;
  public isLoading: boolean = false;
  public customModalOptions = {
    header: 'Favorite Candy',
    breakpoints: [0, 0.1, 0.2, 0.4, 0.5, 0.6, 0.8, 1],
    initialBreakpoint: 1,
  };
  public countriesList = COUNTRIES_LIST;
  public dateTimeOptions = {
    date: {
      weekday: 'short',
      month: 'long',
      day: '2-digit',
      year: 'long',
    },
    time: {
      hour: '2-digit',
      minute: '2-digit',
    },
  };
  constructor(private fb: FormBuilder) {
    this.formData = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required, Validators.email]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      middleName: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]],
    });

    this.otherForm = this.fb.group({
      mobile: ['', [Validators.required, Validators.email]],
      gender: ['', [Validators.required]],
      lane1: ['', [Validators.required, Validators.email]],
      lane2: ['', [Validators.required]],
      state: ['', [Validators.required]],
      nationality: ['', [Validators.required]],
    });
  }

  ngOnInit() {}

  public signUp() {
    console.log(this.formData, this.otherForm);
  }
}
