import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() offset = 0
  @Input() limit = 20
  @Input() totalData = 0
  currentPage = 1
  @Output() paginationClick = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  numbersPage(): number[] {
    const result: number[] = []
    for (let index = 0; index < this.totalData; index++) {
      result.push(index + 1)
    }
    return result
  }

  onPaginationClick(page: number) {
    if (!(page * this.limit > this.totalData || page < 1)) {
      this.currentPage = page
      this.paginationClick.emit(this.currentPage)
    }
  }

  totalPages(): number {
    return this.totalData / this.limit
  }


}
