import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full"},
  { path: "home", component: HomeComponent},
  { path: "about", component: AboutComponent},
  { path: "products", component: ProductsComponent},
  { path: "products/:id", component: ProductComponent},
  { path: "add", component: AddComponent},
  { path: "edit/:id", component: EditComponent},
  { path: "**", component: NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
