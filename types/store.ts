import type { RouteRecordName } from 'vue-router';

export interface State {
  count: number;
  removeRoutes: RouteRecordName[];
}
