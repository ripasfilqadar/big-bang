import { CrudAction } from '../../crud/models/crud-action'


export class InfiniteScroll extends CrudAction {
  type: string
  scrollWindow: boolean
  infiniteScrollDistance: number
  limit: number
  page: number

  constructor(options: { [key: string]: any } = {}) {
    super()
    this.scrollWindow = options['scrollWindow'] || false
    this.type = options['type'] || 'infinite-scroll'
    this.infiniteScrollDistance = options['infiniteScrollDistance'] || 2
    this.limit = options['limit'] || 20
    this.page = options['page'] || 0
  }

  onScroll(params: {[key: string]: any} = {}): any {
    return new Promise((resolve, reject) => {
      params['offset'] = this.datas.length
      this.service.getAll(params).subscribe((result) => {
        this.datas = [...this.datas, ...result]
        this.dataTemp = this.datas
        resolve()
      },
    (err) => reject(err))

    })

  }
}
