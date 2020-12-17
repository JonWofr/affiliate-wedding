import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingBannerComponent } from './components/landing-banner/landing-banner.component';
import { SelectionBannerComponent } from './components/selection-banner/selection-banner.component';
import { SliderComponent } from './components/slider/slider.component';
import { SelectionSlideComponent } from './components/slides/selection-slide/selection-slide.component';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GuideContentComponent } from './components/slides/guide-content/guide-content.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

var firebaseConfig = {
  apiKey: "AIzaSyDocqAuUI01V7vxaBv9SRvJdQyTq2tCQ2M",
  authDomain: "wedding-wix-tutorial.firebaseapp.com",
  projectId: "wedding-wix-tutorial",
  storageBucket: "wedding-wix-tutorial.appspot.com",
  messagingSenderId: "514595394479",
  appId: "1:514595394479:web:4a2ce5d943a9a7b950155a",
  measurementId: "G-C38YX212SE"
};

@NgModule({
  declarations: [
    AppComponent,
    LandingBannerComponent,
    SelectionBannerComponent,
    SliderComponent,
    SelectionSlideComponent,
    PopUpComponent,
    GuideContentComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
