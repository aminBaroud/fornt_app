import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { dev } from '../../environments/dev';

@Injectable({ providedIn: 'root' })
export class PlanService {
  constructor(private router: Router, private http: HttpClient) {}
  ListPlans() {
    let returnedData = this.http
      .get<any>(`${dev.apiUrl}/settings/plan/all`)
      .pipe(
        map((data) => {
          console.log('list all plans ==> ', data);
          return data;
        })
      );
    return returnedData;
  }
}
