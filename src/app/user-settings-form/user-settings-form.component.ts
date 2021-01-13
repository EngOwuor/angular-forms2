import { Component, OnInit } from '@angular/core';
import{NgForm} from '@angular/forms'
import { UserSettings } from './user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  originalUserSettings:UserSettings={
    name:null,
    emailOffers:true,
    interfaceStyle:"dark",
    subscriptionType:"monthly",
    notes:'here are sm notes'

  };
  userSettings:UserSettings={...this.originalUserSettings}

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    console.log('in onSubmit',form.valid)
  }
}
