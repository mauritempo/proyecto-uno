import { Routes } from '@angular/router';
import { ArticleComponent } from './components/article/article.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [{
    path: "",
    component: HomeComponent},
{
    path: "articles",
    component: ArticleComponent
}];
