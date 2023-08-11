const mapping: Record<string, string> = {
  blogs: 'blog',
  'chat-bots': 'chat_bot',
  events: 'event',
  forums: 'forum',
  news: 'news',
  organizations: 'organization',
  rewards: 'reward',
  users: 'user',
  vlogs: 'vlog',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
