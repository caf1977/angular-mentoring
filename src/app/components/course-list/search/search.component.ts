import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  @Output() search = new EventEmitter<string>();
  searchValue: string = "";

  handleSearch(): void {
    this.search.emit(this.searchValue);
  }

  onCourseAdd(): void {
    console.log("Add Course button clicked");
  }
}
