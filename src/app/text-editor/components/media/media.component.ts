import { Component, OnInit, Inject, ViewChild, ElementRef, Input } from '@angular/core'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material'
import { MediaService } from '../../services/media.service'
import { Media } from '../../models/media'

import { PuiConfirmDialogService } from '../../../pusintek-ui/components/pui-confirm-dialog/pui-confirm-dialog.service'
import { InfiniteScroll } from '../../../pagination/models/infinite-scroll'
import { animation } from '../../../crud/models/animation'


@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css'],
  providers: [MediaService],
  animations: animation
})
export class MediaComponent extends InfiniteScroll implements OnInit {
  @ViewChild('fileInput') fileInput: ElementRef
  datas: Media[] = []
  dataTemp: Media [] = []
  selectedMedia: Media[] = []
  showMedia = false
  @Input() multiple = true
  public dataMat: any = {}
  brokenImage = '/assets/shared/images/not-found.png'
  mediaTypes = [{
    name: 'Image',
    type: 'image'
  },
  {
    name: 'Document',
    type: 'document'
  },
  {
    name: 'Video',
    type: 'video'
  },
  {
    name: 'Another',
    type: 'undefined'
  }
  ]
  public type: string
  constructor(
    public service: MediaService,
    public dialogRef: MatDialogRef<MediaComponent>,
    public dialogService: PuiConfirmDialogService,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {
    super()
    this.dataMat = data || {}
  }

  ngOnInit() {
    if (this.dataMat && this.dataMat.type !== undefined) {
      this.onClickFolder(this.dataMat.type)
      this.multiple = this.dataMat.multiple
    }
  }

  getData(params: {[key: string]: string} = {}) {
    super.getData(params).then((result: Media[]) => {
      this.filterData()
    })
  }

  onNoClick () {
    this.dialogRef.close()
  }

  onChange(e: any) {
    const files = e.target.files || e.dataTransfer.files
    const resultMedia = new FormData()
    for (const file of files) {
      resultMedia.append('MediaData', file, file.name)
    }
    this.service.create(resultMedia).subscribe((result) => {
      this.getData(this.paramsType())
    })
  }

  onClickAdd() {
    this.fileInput.nativeElement.click()
  }

  toggleSelect(media: Media) {
    const index = this.selectedMedia.map(x => x.MediaId).indexOf(media.MediaId)
    if (index !== -1) {
      this.selectedMedia.splice(index, 1)
    } else {
      if (!this.multiple && this.selectedMedia.length > 0) {
        return
      }
      this.selectedMedia.push(media)
    }
  }

  isSelected(media: Media): boolean {
    return this.selectedMedia.map(x => x.MediaId).indexOf(media.MediaId) !== -1
  }

  state(): string {
		return this.selectedMedia.length === 0 ? 'inactive' : 'active'
  }

  onDeleteClick() {
    const index = this.datas.indexOf
    this.dialogService.confirm('Konfirmasi', 'Hapus Media?')
    .subscribe(accept => {
      if (accept) {
        this.service.deleteMedia(this.selectedMedia.map(x => x.MediaId))
        .subscribe(() => {
          this.datas = []
          this.getData(this.paramsType())
        })
      }
    })
  }

  onClickFolder(type: string) {
    this.selectedMedia = []
    this.datas = []
    this.showMedia = true
    this.type = type
    this.getData(this.paramsType())
  }

  backToFolder() {
    this.showMedia = false
    this.datas = []
    this.selectedMedia = []
  }

  updateFilter(event: any) {
    const keyword = event.target.value.toLowerCase()
    this.datas = this.dataTemp.filter(x => x.Title.toLowerCase().indexOf(keyword) !== -1)
  }

  thumbPath(media: Media): string {
    let urlPath = ''
    if (media.Type === 'image') {
      urlPath =  `media/image/${media.MediaId}/thumb_${media.Path}`
    } else if (media.Ext === '.pdf') {
      urlPath = `assets/shared/images/pdf-icon.png`
    } else if (['.docx', '.doc', '.rtf'].indexOf(media.Ext) !== -1) {
      urlPath = `assets/shared/images/word-icon.png`
    } else if (['.excell', '.xlsx', '.xlx'].indexOf(media.Ext) !== -1) {
      urlPath = `assets/shared/images/excell-icon.png`
    } else if (media.Type === 'video') {
      urlPath = `assets/shared/images/video-icon.png`
    } else {
      urlPath = `assets/shared/images/not-found.png`
    }
    return urlPath
  }

  paramsType(): any {
    const params: { [key: string]: any } = {offset: this.datas.length}
    if (this.type !== '' || this.type !== undefined) {
      params['type'] = this.type
      return Object.assign(params)
    }
    return params
  }

  onOkClick() {
    const result: Media[] = []
    for (const media of this.selectedMedia) {
      result.push(media)
    }
    this.dialogRef.close({
      result: result
    })
  }

  onScroll() {
    super.onScroll(this.paramsType()).then((result: any) => {
      this.filterData()
    })
  }

  filterData() {
    const ext = this.dataMat.ext
    if (ext !== undefined) {
      this.datas = this.datas.filter(x => x.Ext === ext)
      this.dataTemp = this.datas
    }
  }
}
