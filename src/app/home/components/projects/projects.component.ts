import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Project } from '../../../models/project.model';

@Component({
  selector: 'app-projects',
  template: `<app-projects-list
    [projects]="(projects$ | async) || []"
  ></app-projects-list>`,
  styles: [],
})
export class ProjectsComponent implements OnInit {
  projects$: Observable<Project[]>;
  constructor() {
    this.projects$ = of<Project[]>([
      {
        name: 'Project 1',
        webGithub: 'https://github.com/cjosue15/happiness-test',
        webUrl: 'https://happiness-test.netlify.app',
        imageUrl: 'assets/images/project.jpg',
      },
    ]);
    // .pipe(delay(1500));
  }

  ngOnInit(): void {}
}
