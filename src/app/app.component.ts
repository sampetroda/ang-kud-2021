import { Component } from '@angular/core';
import { EmployeeComponent} from './Employee/employee.component';
@Component({
  selector: 'my-app',
  template: `<div>
  <h1>{{pageHeader}}</h1>
  <my-employee></my-employee>
</div>`
})
export class AppComponent {
  pageHeader: string = 'Employee Details';
}
