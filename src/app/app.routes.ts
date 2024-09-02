import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PokemonsComponent } from './pages/pokemons/pokemons.component';
import { ListPostsComponent } from './pages/list-posts/list-posts.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { LoginComponent } from './pages/login/login.component';
import { NgzorroComponent } from './pages/ngzorro/ngzorro/ngzorro.component';
import { Error404Component } from './pages/error404/error404.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { TodosComponent } from './pages/todos/todos.component';
import { permissionsGuard } from './guards/permissions.guard';
import { warningGuard } from './guards/warning.guard';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard'


export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'pokemons', component: PokemonsComponent,...canActivate (()=>redirectUnauthorizedTo(['/login']))},
    { path: 'pokemon/:id', component: PokemonComponent },
    { path: 'posts', component: ListPostsComponent, canDeactivate: [warningGuard] },
    { path: 'acercade', component: AcercadeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'todos', component: TodosComponent, canActivate: [permissionsGuard] },
    { path: 'ngzorro', component: NgzorroComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: Error404Component },
];
