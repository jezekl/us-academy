import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Training } from '../../../../models/training';
import { Workshop } from '../../../../models/workshop';
import { Camp } from '../../../../models/camp';
import { selectDetail } from '../../reducers/detail.reducer';
import { GetDetail } from '../../actions/detail.actions';

@Component({
  selector: 'usacademy-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {
  destroy: Subject<null> = new Subject<null>();
  detail: Observable<Training | Workshop | Camp>;

  constructor(
    private store: Store<any>,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params
      .pipe(
        takeUntil(this.destroy)
      )
      .subscribe((params: { [key: string]: number }) => {
        this.fetchDetail(params.id);
      });

    this.detail = this.store
      .pipe(
        select(selectDetail)
      );
  }

  ngOnDestroy() {
    this.destroy.next();
  }

  fetchDetail(id: number): void {
    this.store.dispatch(new GetDetail({
      id: id
    }));
  }

}
