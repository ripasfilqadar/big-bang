import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, Input } from '@angular/core'
import { MatDialog } from '@angular/material'
import { MediaComponent } from '../media/media.component'
import { Media } from '../../models/media'

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent implements OnInit {

  @Output() textChange =  new EventEmitter<string>()
  @Input() text = ''
  cursor = 0
  @ViewChild('textEditor') textEditor: any
  quillEditor: any
  constructor(
    public dialog: MatDialog,

  ) { }

  ngOnInit() {
  }

  getResult() {
    this.textChange.emit(this.text)
  }

  showMediaPopUp(event: any) {
    const index = this.textEditor.getQuill().selection.savedRange.index

    const dialogRef = this.dialog.open(MediaComponent)
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const text = this.quillEditor.getText()
        for (const media of result.result) {
          this.quillEditor.clipboard.dangerouslyPasteHTML(index, `${this.mediaData(media)}&nbsp;&nbsp;&nbsp;`)
        }
      }
    })
  }

  mediaData(media: Media): string {
    let result = ''
    if (media.Type === 'image') {
      result =  `<img src="media/image/${media.MediaId}/normal_${media.Path}">`
    } else {
        result = `<a href="media/${media.Type}/${media.Path}">${media.Title}</a>`
    }
    return result
  }

  initQuill(event: any) {
    this.quillEditor = event.editor
  }

  submitText() {
    this.textChange.emit(this.text)
  }
}
