import { Component, OnInit } from '@angular/core';
import{NgForm, NgModel} from '@angular/forms'
import { Observable } from 'rxjs';
import { UserSettingsService } from '../user-settings/user-settings.service';
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
  userSettings:UserSettings={...this.originalUserSettings};
  subscriptionTypes:Observable<string[]>;

  constructor( private userSettingsService:UserSettingsService) { }

  ngOnInit(): void {
    this.subscriptionTypes=this.userSettingsService.getSubscriptionTypes();
  }
  onBlur(field:NgModel){
    console.log('in onBlur',field.valid)
  }
  onSubmit(form:NgForm){
    console.log('in onSubmit',form.valid)
    this.userSettingsService.postUserSettingsForm(this.userSettings).subscribe(
      result=>console.log('success',result),
      error=>console.log('error',error)
      )
      
    
  }
}
