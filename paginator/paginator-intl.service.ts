import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { PageEvent } from './typings';

@Injectable({
  providedIn: 'root',
})
export class NgxPaginatorIntl {
  readonly changes: Subject<void> = new Subject<void>();

  itemsPerPageLabel: string = 'Items per page:';

  nextPageLabel: string = 'Next page';

  previousPageLabel: string = 'Previous page';

  firstPageLabel: string = 'First page';

  lastPageLabel: string = 'Last page';

  ofLabel: string = 'of';

  constructor() { }

  getRangeLabel(pageStatus: PageEvent) {
    return ` ${pageStatus.currentPageIndex * pageStatus.pageSize + 1} - ${Math.min(
      pageStatus.currentPageIndex * pageStatus.pageSize + pageStatus.pageSize,
      pageStatus.length
    )
      } ${this.ofLabel} ${pageStatus.length}`;
  }
}
