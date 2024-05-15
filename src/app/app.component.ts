import { Component } from '@angular/core';
import { DownloadCenterService, FilterType } from '@wxp/common/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private downloadCenterService: DownloadCenterService) {
    console.log('DownloadCenterService', this.downloadCenterService);
  }

  titleHeading = 'h3';
  title = 'wxp-angular16';
  noResultsLabel = '';
  showResultCount = true;
  searchbarHeadline = '<h3>Headline</h3>';
  searchbarFilterTypes = [
    FilterType.document,
    FilterType.location,
    FilterType.language,
  ];
  searchbarAutocomplete = true;
  searchbarPrefill = undefined;
  industry = undefined;
  operationDivision = undefined;
  pimID = undefined;
  showFilterBarInitially = true;
}
