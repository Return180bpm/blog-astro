import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function get(context) {
	const posts = await getCollection('posts')
	return rss({
		title: "tom's blobs | Blog",
		description: 'an ape shot out of a cannon taking notes',
		site: context.site,
		items: posts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description,
			link: `/posts/${post.slug}/`
		})),
		customData: `<language>en-us</language>`
	})
}
