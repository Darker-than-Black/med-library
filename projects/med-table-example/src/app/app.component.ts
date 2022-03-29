import {Component} from '@angular/core';
import {MOCK_DATA} from "./mockData";
import {TABLE_CONFIG} from "./tableConfig";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly data = MOCK_DATA;
  readonly tableConfig = TABLE_CONFIG;
}
