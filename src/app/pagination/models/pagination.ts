import { IbaseCrudService } from '../../crud/services/ibase-crud.service'

export class Pagination {
  public limit = 20
  public offset = 0
  public totalData = 0
  public currentPage = 1
  public datas: any = []
  public service: IbaseCrudService
  public onSearch = false
  public keywordSearch = ''

  requestParams(): {[key: string]: any} {
    const params: {[key: string]: any} = { limit: this.limit, offset: this.offset }
    if (this.keywordSearch !== '') {
      params['keyword'] = this.keywordSearch
    }
    return params
  }

  getData(params: {[key: string]: any} = {}) {
    params = Object.assign(params, this.requestParams())
    this.service.getAll(params).subscribe(result => {
      this.datas = result.data
      this.totalData = result.count
    })
  }

  onPaginationClick(page: any) {
    this.currentPage = page
    this.offset = (page - 1) * this.limit
    this.getData()
  }

  searchData() {
    this.currentPage = 1
    this.onSearch = true
    this.offset = 0
    this.getData()
  }

  setPage(event: any) {
    this.offset = event.offset * event.pageSize
    this.getData()
  }
}
