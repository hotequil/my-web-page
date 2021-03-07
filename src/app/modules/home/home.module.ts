import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeMessageComponent } from './message/home-message.component';
import { HomeProjectsComponent } from './projects/home-projects.component';

@NgModule({
    declarations: [
        HomeComponent,
        HomeMessageComponent,
        HomeProjectsComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HomeModule { }
