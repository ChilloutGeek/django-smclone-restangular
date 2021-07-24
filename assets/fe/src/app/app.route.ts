import { FEED_ROUTES } from 'src/app/components/feed/feed.route';

export const APP_ROUTES = {
  otherwise: '/login',
  states: ([] as any[]).concat(
    FEED_ROUTES
  )
}