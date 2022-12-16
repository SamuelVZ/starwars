import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCharacterComponent } from './components/create-character/create-character.component';
import { ListComponent } from './components/list/list.component';
import { TabsComponent } from './components/tabs/tabs.component';

const routes: Routes = [
  {
    path: 'characters',
    component: TabsComponent,
    children: [
      //children are to detect children routes inside the parent route
      { path: '', redirectTo: 'all', pathMatch: 'full' },
      { path: ':side', component: ListComponent },
    ],
  },
  { path: 'new-character', component: CreateCharacterComponent },
  { path: '**', redirectTo: '/characters' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
