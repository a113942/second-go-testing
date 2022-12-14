import { createActionGroup, props } from '@ngrx/store';
import { SongListEntity } from '../reducers/list.reducer';

export const SongDocuments = createActionGroup({
  source: 'Song Documents',
  events: {
    song: props<{ payload: SongListEntity }>(),
    songs: props<{ payload: SongListEntity[] }>(),
  },
});
