import { denormalize } from 'normalizr';
import { posesSchema } from '@src/app/store/modules/poses/poses.schema';

export const selectPoseActive = createSelector(
  [selectPosesActiveId, selectPosesEntities],
  (activeId, entities) => denormalize(activeId, posesSchema, { poses: entities })
);