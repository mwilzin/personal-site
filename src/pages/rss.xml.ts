import { getRssString } from '@astrojs/rss';

import { fetchPosts } from '~/utils/blog';
import { getPermalink } from '~/utils/permalinks';

const SITE_NAME = 'Marc-Aurel Wilzin';
const SITE_DESCRIPTION = 'Personal website and blog';
const BLOG_ENABLED = true;
const TRAILING_SLASH = 'always' as const;

export const GET = async () => {
  if (!BLOG_ENABLED) {
    return new Response(null, {
      status: 404,
      statusText: 'Not found',
    });
  }

  const posts = await fetchPosts();

  const rss = await getRssString({
    title: `${SITE_NAME}’s Blog`,
    description: SITE_DESCRIPTION,
    site: import.meta.env.SITE,

    items: posts.map((post) => ({
      link: getPermalink(post.permalink, 'post'),
      title: post.title,
      description: post.excerpt,
      pubDate: post.publishDate,
    })),

    trailingSlash: TRAILING_SLASH,
  });

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
