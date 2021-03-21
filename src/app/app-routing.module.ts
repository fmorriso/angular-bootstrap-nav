import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
//
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AccordionExampleComponent } from './accordion-example/accordion-example.component';


const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'contact', component: ContactComponent },
	{ path: 'accordion', component: AccordionExampleComponent },
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: '**', component: PageNotFoundComponent },
];

const routeOptions: ExtraOptions = {
	enableTracing: false,
	relativeLinkResolution: 'legacy'
};

@NgModule({
	imports: [RouterModule.forRoot(routes, routeOptions)],
	exports: [RouterModule],
})
export class AppRoutingModule { }
