import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {
    path: 'dashboard',
    loadChildren: async () => (await import('./features/dashboard/dashboard.module')).DashboardModule
  },
  {
    path: 'talks',
    loadChildren: async () => (await import('./features/articles/articles.module')).ArticlesModule
  },
  {
    path: 'articles',
    loadChildren: async () => (await import('./features/talks/talks.module')).TalksModule
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
