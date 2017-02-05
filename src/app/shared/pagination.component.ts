import { Component, Input, Output, EventEmitter } from '@angular/core';
import { OnChanges } from '@angular/core';

@Component({
    selector: 'pagination',
    template: `
        <nav *ngIf="items.length > pageSize">
            <ul class="pagination">
                <li [class.disabled]="currentPage ==1">
                    <a (click)="onPrevious()" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li [class.active]="currentPage == page" *ngFor="let page of pages" 
                    (click)="onChangePage(page)">
                    <a> {{ page }} </a>
                </li>
                <li [class.disabled]="currentPage == pages.length">
                    <a  (click)="onNext()" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>    
    `
})
export class PaginationComponent implements OnChanges{
    @Input() items=[];
    @Input('page-size') pageSize = 10;
    @Output('page-changed') pageChanged = new EventEmitter();
    pages: any[];
    currentPage;

    ngOnChanges(){
        this.currentPage = 1;
        var pagesCount = this.items.length / this.pageSize;
        this.pages = [];
        for (var i = 1 ; i <= pagesCount ; i++){
            this.pages.push(i);
        }
    }

    onChangePage(page){
        this.currentPage = page;
        this.pageChanged.emit(page);
    }
    onPrevious(){
        if (this.currentPage == 1){
            return;
        }
        this.currentPage--;
        this.pageChanged.emit(this.currentPage);
    }
    onNext(){
        if (this.currentPage == this.pages.length){
            return;
        }
        this.currentPage++;
        this.pageChanged.emit(this.currentPage);
    }
}