import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

import {FormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { BrokerageComponent } from './pages/brokerage/brokerage.component';
import { BusinessContributorComponent } from './pages/business-contributor/business-contributor.component';
import { ConsultancyComponent } from './pages/consultancy/consultancy.component';
import { LoginComponent } from './pages/login/login.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { SimulatorComponent } from './pages/brokerage/components/simulator/simulator.component';
import { VideoComponent } from './shared/components/video/video.component';
// import { EditableContentComponent } from './shared/components/editable-content/editable-content.component';
import { LegalComponent } from './pages/legal/legal.component';
import { CorporateComponent } from './pages/corporate/corporate.component';
import { ClaimComponent } from './pages/claim/claim.component';
import { PartnershipComponent } from './pages/partnership/partnership.component';
import { RecruitmentComponent } from './pages/recruitment/recruitment.component';
import { ArrowDownComponentComponent } from './shared/style/arrow-down-component/arrow-down-component.component';
import { AppointmentButtonComponent } from './shared/buttons/appointment-button/appointment-button.component';
import { ClientViewComponent } from './pages/client-view/client-view.component';
import { ClientDetailsComponent } from './pages/client-details/client-details.component';
import { ClientProjectsComponent } from './pages/client-projects/client-projects.component';
import { CreateClientComponent } from './pages/create-client/create-client.component';
import { ProjectCreationComponent } from './pages/project-creation/project-creation.component';
import { ProjectTypeCreationComponent } from './pages/project-type-creation/project-type-creation.component';
import { ProjectTypeListComponent } from './pages/project-type-list/project-type-list.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { UserTypeListComponent } from './pages/user-type-list/user-type-list.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';
import { AuthInterceptor } from './shared/core/interceptor/auth.interceptor';
import { FaqComponent } from './pages/faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    BrokerageComponent,
    BusinessContributorComponent,
    ConsultancyComponent,
    LoginComponent,
    VideoComponent,
    SimulatorComponent,
    // EditableContentComponent,
    LegalComponent,
    CorporateComponent,
    ClaimComponent,
    PartnershipComponent,
    RecruitmentComponent,
    ArrowDownComponentComponent,
    AppointmentButtonComponent,
    ClientViewComponent,
    ClientDetailsComponent,
    ClientProjectsComponent,
    CreateClientComponent,
    ProjectCreationComponent,
    ProjectTypeCreationComponent,
    ProjectTypeListComponent,
    SettingsComponent,
    UserTypeListComponent,
    ProjectDetailComponent,
    FaqComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    YouTubePlayerModule,
    HttpClientModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'},
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  exports: [VideoComponent],
})
export class AppModule { }


