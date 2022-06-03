import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageResolver } from './home-page/home-page.resolver';
import { ItemResolver } from './item/item.resolver';
import { SearchResolver } from './search/search.resolver';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule),
    data: { animation: '' },
    resolve: { resolve: HomePageResolver }
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then(m => m.CartModule),
    data: { animation: undefined }
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then(m => m.SearchModule),
    data: { animation: undefined },
    resolve: { resolve: SearchResolver }

  },
  {
    path: 'item/:id',
    loadChildren: () => import('./item/item.module').then(m => m.ItemModule),
    data: { animation: undefined },
    resolve: { resolve: ItemResolver }
  },
  { path: '*', redirectTo: '' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }