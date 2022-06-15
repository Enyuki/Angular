import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses',
    template: `
        <h2>{{ title + getTitle() }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
        <button class="btn btn-primary" [class.acitve]="isActive" (click)="onSave($event)">Save</button>
        <button class="btn btn-primary" [style.backgroundColor]="isActive? 'red':'green'">Save2</button>
    `
})
// HTML DOM Style Obj
export class CoursesComponent {
    title = "Xu";
    isActive = false;
    getTitle() {
        return "WanC";
    }

    courses;

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
    onSave(event: any) {
        console.log(event);
    }
}