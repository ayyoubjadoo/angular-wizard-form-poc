import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationWizardComponent } from './registration-wizard/registration-wizard.component';
import { PersonalDetailsComponent } from './registration-wizard/personal-details/personal-details.component';
import { WorkDetailsComponent } from './registration-wizard/work-details/work-details.component';
import { SkillsListComponent } from './registration-wizard/skills-list/skills-list.component';
import { CommentsComponent } from './registration-wizard/comments/comments.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationWizardComponent,
    PersonalDetailsComponent,
    WorkDetailsComponent,
    SkillsListComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
