import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { format, addDays} from 'date-fns';
import { ptBR } from 'date-fns/locale';


@Injectable({
  providedIn: 'root'
})
export class DateService {
  constructor(private httpClient: HttpClient) { }
  
  url: string = 'http://localhost/agendar/private/api/';

  getWeekDaysRestrictions(): Observable<Date[]> {
    return this.httpClient.get<Date[]>(`${this.url}`);
  }

  weekDaysRestrictions: string[] = [];
  dateRestrictions: string[] = [];
  timeRestrictions: string[] = [];

  addDaysToDate(date: string, days: number, formatDate: string = 'yyyy-MM-dd') {
    const newDate = addDays(new Date(date), days);
    return format(newDate, formatDate);
  };

  getFullDate(date: string, formatDate: string = 'yyyy-MM-dd') {
    return format(new Date(date), formatDate);
  };

  getWeekDay(date: string) {
    return format(new Date(date), 'EEEE', { locale: ptBR });
  };

  dateIsAvailable(date: string) {
    return !(this.weekDaysRestrictions.includes(this.getWeekDay(date)) || this.dateRestrictions.includes(this.getFullDate(date)));
  };

  hourIsAvailable(day: any, hour: string) {
    return day[hour].free;
  }
}
