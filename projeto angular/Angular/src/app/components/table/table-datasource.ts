import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface TableItem {
  placa: number;
  cliente: string;
  marca: string;
  modelo: string;
  ano: number;
  status: boolean
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: TableItem[] = [
  {placa: 1, cliente: 'Hydrogen', marca: 'Volks', modelo: 'Gol', ano: 2010, status: true},
  {placa: 2, cliente: 'Helium', marca: 'Volks', modelo: 'Gol', ano: 2010, status: true},
  {placa: 3, cliente: 'Lithium', marca: 'Volks', modelo: 'Gol', ano: 2010, status: true},
  {placa: 4, cliente: 'Beryllium', marca: 'Volks', modelo: 'Gol', ano: 2010, status: true},
  {placa: 5, cliente: 'Boron', marca: 'Volks', modelo: 'Gol', ano: 2010, status: true},
  {placa: 6, cliente: 'Carbon', marca: 'Volks', modelo: 'Gol', ano: 2010, status: true},
  {placa: 7, cliente: 'Nitrogen', marca: 'Volks', modelo: 'Gol', ano: 2010, status: true},
  {placa: 8, cliente: 'Oxygen', marca: 'Volks', modelo: 'Gol', ano: 2010, status: true},
  {placa: 9, cliente: 'Fluorine', marca: 'Volks', modelo: 'Gol', ano: 2010, status: true},
  {placa: 10, cliente: 'Neon', marca: 'Volks', modelo: 'Gol', ano: 2010, status: true},
  {placa: 11, cliente: 'Sodium', marca: 'Volks', modelo: 'Gol', ano: 2010, status: true},
  {placa: 12, cliente: 'Magnesium', marca: 'Volks', modelo: 'Gol', ano: 2010, status: true},
  {placa: 13, cliente: 'Aluminum', marca: 'Volks', modelo: 'Gol', ano: 2010, status: true},
  {placa: 14, cliente: 'Silicon', marca: 'Volks', modelo: 'Gol', ano: 2010, status: true},
  {placa: 15, cliente: 'Phosphorus', marca: 'Volks', modelo: 'Gol', ano: 2010, status: true},
  {placa: 16, cliente: 'Sulfur', marca: 'Volks', modelo: 'Gol', ano: 2010, status: true},
  {placa: 17, cliente: 'Chlorine', marca: 'Volks', modelo: 'Gol', ano: 2010, status: true},
  {placa: 18, cliente: 'Argon', marca: 'Volks', modelo: 'Gol', ano: 2010, status: true},
  {placa: 19, cliente: 'Potassium', marca: 'Volks', modelo: 'Gol', ano: 2010, status: true},
  {placa: 20, cliente: 'Calcium', marca: 'Volks', modelo: 'Gol', ano: 2010, status: true},
];

/**
 * Data source for the Table view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TableDataSource extends DataSource<TableItem> {
  data: TableItem[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<TableItem[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: TableItem[]): TableItem[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: TableItem[]): TableItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'cliente': return compare(a.cliente, b.cliente, isAsc);
        case 'placa': return compare(+a.placa, +b.placa, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/cliente columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
