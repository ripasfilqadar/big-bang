import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TextEditorComponent } from './components/text-editor/text-editor.component'
import { EditorModule } from 'primeng/primeng'
import { FormsModule } from '@angular/forms'
import { MatIconModule } from '@angular/material/icon'
import { MediaComponent } from './components/media/media.component'

import {MatCardModule} from '@angular/material/card'
import { WingModule } from '../wing/wing.module'
import { FlexLayoutModule } from '@angular/flex-layout'
import { InfiniteScrollModule } from 'ngx-infinite-scroll'
import { defaultBaseMat } from '../crud/models/mat-material-importer'

@NgModule({
  imports: [
    CommonModule,
    EditorModule,
    FormsModule,
    MatIconModule,
    ...defaultBaseMat,
    MatCardModule,
    WingModule,
    FlexLayoutModule,
    InfiniteScrollModule
  ],
  declarations: [TextEditorComponent, MediaComponent],
  exports: [TextEditorComponent],
  entryComponents: [MediaComponent, MediaComponent]
})
export class TextEditorModule { }
