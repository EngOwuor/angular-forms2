import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserSettings } from '../user-settings-form/user-settings';

@Injectable({
  providedIn: 'root'
})
export class UserSettingsService {

  constructor(private http:HttpClient) { }
  getSubscriptionTypes():Observable<string[]>{
    return of(['monthly','annually','lifetime'])
  }

  postUserSettingsForm(userSettings:UserSettings):Observable<any>{
    return this.http.post('https://putsreq.com/aqZEvODZr3dDEBSUEEUQ',userSettings)
    // of(userSettings)

  }
}
