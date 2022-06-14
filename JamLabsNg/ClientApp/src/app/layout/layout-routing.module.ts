import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/a',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'a', loadChildren: () => import('../a/a.module').then(m => m.AModule) },
      { path: 'b', loadChildren: () => import('../b/b.module').then(m => m.BModule) },
      { path: 'c', loadChildren: () => import('../c/c.module').then(m => m.CModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
