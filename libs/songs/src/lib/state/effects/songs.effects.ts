import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { PlaylistFeatureEvents } from '../actions/feature.actions';
import { SongDocuments } from '../actions/songs.actions';
import { SongListEntity } from '../reducers/list.reducer';
@Injectable()
export class SongEffects {
  private readonly url = 'http://localhost:1337/songs/';
  loadSongs$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PlaylistFeatureEvents.entered),
      switchMap(() =>
        this.http
          .get<{ data: SongListEntity[] }>(this.url)
          .pipe(map(({ data }) => SongDocuments.songs({ payload: data }))),
      ),
    );
  });
  constructor(
    private readonly http: HttpClient,
    private readonly actions$: Actions,
  ) {}
}
