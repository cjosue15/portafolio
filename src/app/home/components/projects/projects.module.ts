import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';

@NgModule({
  declarations: [ProjectsComponent, ProjectsListComponent],
  imports: [CommonModule],
  exports: [ProjectsComponent],
})
export class ProjectsModule {}
