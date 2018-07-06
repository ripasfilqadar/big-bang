import { ViewChild } from '@angular/core'
import { DatatableComponent } from '@swimlane/ngx-datatable'
import { IbaseCrudService } from '../services/ibase-crud.service'
import { PuiSnackbarService } from '../pusintek-ui/components/pui-snackbar/pui-snackbar.service'
import { MatDialog } from '@angular/material'
import { PuiConfirmDialogService } from '../pusintek-ui/components/pui-confirm-dialog/pui-confirm-dialog.service'
import { CrudAction } from './crud-action'

export class DataTableBase extends CrudAction {
  columns: any[] = []
  selected: any [] = []
  showSearch = false
  @ViewChild(DatatableComponent) table: DatatableComponent

  onSelect() {
		this.showSearch = false
	}

	state(): string {
		return this.selected.length === 0 ? 'inactive' : 'active'
	}

  singleSelectCheck(row: any): boolean {
    return this.selected.indexOf(row) === -1
  }

  updateFilter($event: any) {
    this.datas = $event
	}

	onSearch($event: any) {
		let keyword = ''
		try {
			keyword = $event.target.value.toLocaleLowerCase()
		} catch (e) {
		}
	}

	getData(params: { [key: string]: any} = {}): any {
		return new Promise((resolve, reject) => {
			super.getData(params).then((result: any) => {
				this.selected = []
				resolve(result)
			}).catch((err: any) => reject(err))
		})
	}

	onClickSearch() {
		this.showSearch = true
	}

	searchData(keyword: string) {
		this.datas = this.dataTemp.filter(x => JSON.stringify(x).indexOf(keyword) !== -1)
		this.table.offset = 0
	}

	createData(data: any): any {
		return new Promise((resolve, reject) =>  {
			super.createData(data).then((result: any) => {
				resolve(result)
				this.getData()
			})
		})
	}

	deleteData(id: string): any {
		return new Promise((resolve, reject) => {
			super.deleteData(id).then((result: any) => {
				resolve(result)
				this.getData()
			})
		})

	}

	editData(data: any, id: string): any {
	super.editData(data, id).then(() => this.getData())
	}
}
