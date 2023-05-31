// Standard long form date
// in: 'dd.mm.yyyy'
// out: Saturday, August 6, 2022 < -- too many commas
// const formatDate = (dateFromMarkdown: string): string => {
// 	const [day_, month_, year_] = dateFromMarkdown.split('.')
// 	const dateObj = new Date(Number(year_), Number(month_) - 1, Number(day_))
// 	const options: Intl.DateTimeFormatOptions = {
// 		weekday: 'long',
// 		year: 'numeric',
// 		month: 'long',
// 		day: 'numeric'
// 	}
// 	const dateTimeFormat = new Intl.DateTimeFormat('en-US', options)

// 	return `${dateTimeFormat.format(dateObj)}`
// }

// My custom date

// in: 'dd.mm.yyyy'
export const convertGermanToISODate = (germanDate: string): Date => {
	const [day, month, year] = germanDate.split('.')

	return new Date(`${year}-${month}-${day}`)
}

const pr = new Intl.PluralRules('en-US', { type: 'ordinal' })
const suffixes = new Map([
	['one', 'st'],
	['two', 'nd'],
	['few', 'rd'],
	['other', 'th']
])
const formatOrdinal = (n) => {
	const rule = pr.select(n)
	const suffix = suffixes.get(rule)
	return `${n}${suffix}`
}
// in: 'd.m.yyyy'
const makeDateObj = (myDate: string): Date => {
	const [day, month, year] = myDate.split('.')
	return new Date(Number(year), Number(month) - 1, Number(day))
}
// in: 'dd.m.yyyy'
// out: Saturday, August 6th 2022
export const formatDateStringToCustom = (dateFromMarkdown: string): string => {
	const [day, month, year] = dateFromMarkdown.split('.')
	const dateObj = new Date(Number(year), Number(month) - 1, Number(day))
	const monthName = new Intl.DateTimeFormat('en-US', {
		month: 'long'
	}).format(dateObj)
	const weekday = new Intl.DateTimeFormat('en-US', {
		weekday: 'long'
	}).format(dateObj)

	return `${weekday}, ${monthName} ${formatOrdinal(day)} ${year}`
}

// in: 'dd.m.yyyy'
// out: Saturday, August 6th 2022
export const formatDateObjToCustom = (dateFromZod: Date): string => {
	const monthName = new Intl.DateTimeFormat('en-US', {
		month: 'long'
	}).format(dateFromZod)
	const weekday = new Intl.DateTimeFormat('en-US', {
		weekday: 'long'
	}).format(dateFromZod)

	return `${weekday}, ${monthName} ${formatOrdinal(dateFromZod.getDate())} ${dateFromZod.getFullYear()}`
}

// other

import { MarkdownInstance } from 'astro'
import { Frontmatter } from '@/types'
export const sortByDate = (posts: MarkdownInstance<Frontmatter>[]) => {
	return posts.sort(
		(a, b) =>
			makeDateObj(b.frontmatter.date).valueOf() -
			makeDateObj(a.frontmatter.date).valueOf()
	)
}
