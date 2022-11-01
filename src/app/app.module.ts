import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UniversityComponent } from './university/university.component';
import { StudentComponent } from './student/student.component';
import { FilterPipe } from './shared/filter.pipe';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { SearchBarComponent } from './university/search-bar/search-bar.component';
import { FileUploadComponent } from './university/file-upload/file-upload.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UniversityComponent,
    StudentComponent,
    FilterPipe,
    SearchBarComponent,
    FileUploadComponent,
    ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
