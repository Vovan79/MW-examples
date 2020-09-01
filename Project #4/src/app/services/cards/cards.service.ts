import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class CardsService extends ApiService {
  public setStripeToken(payload: any): Observable<any> {
    const {token, accountMark} = payload;
    return this.http.post(`${this.BASE_URL}/users/cards/`, {token, is_default: accountMark});
  }

  public removeCard(payload: any): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/users/cards/${payload}`);
  }
}
