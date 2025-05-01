import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { Course } from '@app/models/course.interface';
import { CourseItemComponent } from './course-item/course-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-list',
  imports: [CommonModule, SearchComponent, CourseItemComponent],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.scss'
})
export class CourseListComponent {
  courses: Course[] = [];

  ngOnInit(): void {
    console.log("Calling ngOnInit function");

    this.courses = [
      {
        id: 1,
        title: 'Angular Basics',
        creationDate: new Date('2023-01-01'),
        duration: 220,
        description: 'Learn the basics of Angular, including components, templates, and data binding.'
      },
      {
        id: 2,
        title: 'Advanced Angular',
        creationDate: new Date('2022-06-23'),
        duration: 90,
        description: 'Cover advanced Angular topics such as dependency injection, routing, and forms.'
      },
      {
        id: 3,
        title: 'RxJS In Depth',
        creationDate: new Date('1999-05-10'),
        duration: 105,
        description: 'Understand reactive programming with RxJS to handle asynchronous data streams.'
      },
      {
        id: 4,
        title: 'TypeScript Essentials',
        creationDate: new Date('2021-11-13'),
        duration: 280,
        description: 'Master TypeScript, the language behind Angular, to write clean and maintainable code.'
      },
      {
        id: 5,
        title: 'Web Performance Optimization',
        creationDate: new Date('2000-12-04'),
        duration: 65,
        description: 'Learn techniques to optimize the performance of Angular applications.'
      }
    ];
  }

  trackByCourseId(index: number, course: Course): number {
    return course.id; // Use the course 'id' as the unique identifier
  }

  onSearch(searchValue: string): void {
    console.log("Searching Course: " + searchValue);
  }

  onEditClick(courseId: number): void {
    console.log("Edit Course button clicked for id: " + courseId);
  }

  onDeleteClick(courseId: number): void {
    console.log("Delete Course button clicked for id: " + courseId);
  }

  onLoadMore(): void {
    console.log("Load more courses button clicked");
  }
}
