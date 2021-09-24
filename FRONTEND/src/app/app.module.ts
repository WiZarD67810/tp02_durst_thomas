import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './page/common/header/header.component';
import { FooterComponent } from './page/common/footer/footer.component';
import { AuthentificationComponent } from './page/authentification/authentification.component';
import { UserProfilComponent } from './page/user-profil/user-profil.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './guard/auth.guard';
import { ReactiveFormsModule } from '@angular/forms';
import { PhonePipe } from './pipe/phone.pipe';

const appRoutes: Routes = [
  {
    path: "Information",
    canActivate: [AuthGuard],
    component: UserProfilComponent
  },
  {
    path: "",
    component: AuthentificationComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AuthentificationComponent,
    UserProfilComponent,
    NotFoundComponent,
    PhonePipe
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
