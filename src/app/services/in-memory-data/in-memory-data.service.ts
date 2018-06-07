import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
         const books = [
                {id: 99, name: 'בנק ישראל'},
                {id: 12, name: 'בנק הפועלים'},
                {id: 10, name: 'בנק לאומי'},
                {id: 11, name: 'בנק דיסקונט'},
                {id: 20, name: 'בנק מזרחי טפחות'},
                {id: 31, name: 'הבנק הבינלאומי הראשון'},
                {id: 14, name: 'בנק אוצר החייל'},
                {id: 17, name: 'בנק מרכנתיל דיסקונט'},
                {id: 9, name: 'בנק הדואר'},
                {id: 13, name: 'בנק איגוד'}      
                       ]
        return { books };
    }
}






