import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AccordionModule, ButtonsModule, TooltipModule } from 'ngx-bootstrap';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent} from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AccordionExampleComponent } from './accordion-example/accordion-example.component';
import { NgxBootstrapExampleComponent } from './ngx-bootstrap-example/ngx-bootstrap-example.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		NavigationComponent,
		FooterComponent,
		PageNotFoundComponent,
		AboutComponent,
		ContactComponent,
		AccordionExampleComponent,
		NgxBootstrapExampleComponent
	],
	imports: [
		BrowserModule,
		AccordionModule.forRoot(),
		ButtonsModule.forRoot(),
		TooltipModule.forRoot(),
		AppRoutingModule,
		BrowserAnimationsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
