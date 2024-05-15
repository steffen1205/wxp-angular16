import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DownloadCenterModule } from '@wxp/common/download-center';
import { DownloadCenterService } from '@wxp/common/core';
import { TeaserModule } from '@wxp/common/teaser';
import { HttpClient } from '@angular/common/http';
import { KeywordFilterAreaModule } from '@wxp/common/keyword-filter-area';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TeaserModule,
    KeywordFilterAreaModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
