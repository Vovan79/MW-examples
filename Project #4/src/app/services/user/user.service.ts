import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ApiService {
  /**
   * Update user contact details
   */
  public updateContactDetails(body): Observable<any> {
    return this.http.patch(`${this.BASE_URL}/users/profile/`, body);
  }

  /**
   * Update user password
   */
  public updatePassword(body): Observable<any> {
    return this.http.patch(`${this.BASE_URL}/users/profile/`, body);
  }
}