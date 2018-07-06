import { Component, OnInit } from '@angular/core'
import { DataTableBase } from '../../../crud/models/datatable-base'

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent extends DataTableBase implements OnInit {
  constructor() {
    super()
  }

  ngOnInit() {
  }

}
