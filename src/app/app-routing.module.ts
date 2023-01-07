import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InlineEditingOneComponent } from './Pages/inline-editing-one/inline-editing-one.component';
import { InlineEditingTwoComponent } from './Pages/inline-editing-two/inline-editing-two.component';

const routes: Routes = [
  {
    path: '',
    component: InlineEditingOneComponent
  },
  {
    path: 'Way-1',
    component: InlineEditingOneComponent
  },
  {
    path: 'Way-2',
    component: InlineEditingTwoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
