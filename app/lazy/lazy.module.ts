import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { LazyComponent } from './lazy.component';

const routes: Route[] = [
    { path: '', component: LazyComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
    declarations: [LazyComponent],
    providers: [],
})
export class LazyModule { }
