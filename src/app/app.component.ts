import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  titleHeading = 'h3';
  title = 'wxp-angular16';
  noResultsLabel = '';
  showResultCount = true;
  searchbarHeadline = '<h3>Headline</h3>';
  searchbarAutocomplete = true;
  searchbarPrefill = undefined;
  industry = undefined;
  operationDivision = undefined;
  pimID = undefined;
  showFilterBarInitially = true;
}
