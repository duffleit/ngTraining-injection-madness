import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { EagerComponent } from './eager-loaded/eager.component';
import { RootComponent } from './root.component';

const routes: Routes = [
  {
    path: "",
    component: RootComponent,
  },
  {
    path: "eager",
    component: EagerComponent
  },
  {
    path: "lazy",
    loadChildren: "./lazy-loaded/lazy-loaded.module#LazyLoadedModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
