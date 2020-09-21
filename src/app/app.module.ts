import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//
import { AppRoutingModule} from './app-routing.module';
import { AppComponent} from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AccordionExampleComponent } from './accordion-example/accordion-example.component';

//
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		NavigationComponent,
		FooterComponent,
		PageNotFoundComponent,
		AboutComponent,
		ContactComponent,
		AccordionExampleComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		NgbModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
