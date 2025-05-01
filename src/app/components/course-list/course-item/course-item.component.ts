import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '@app/models/course.interface';

@Component({
  selector: 'app-course-item',
  imports: [CommonModule],
  templateUrl: './course-item.component.html',
  styleUrl: './course-item.component.scss'
})
export class CourseItemComponent {
  @Input() course!: Course;
  @Output() editItemEvent = new EventEmitter<number>();
  @Output() deleteItemEvent = new EventEmitter<number>();

  handleEditClick(): void {
    this.editItemEvent.emit(this.course.id);
  }

  handleDeleteClick(): void {
    this.deleteItemEvent.emit(this.course.id);
  }
}
