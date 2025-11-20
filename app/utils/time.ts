import { differenceInMilliseconds } from 'date-fns'
import { toDate } from 'date-fns-tz'

export function getLocaleDatetime(date: string | Date) {
	const appConfig = useAppConfig()
	return toDate(date, { timeZone: appConfig.timezone })
		.toLocaleString(undefined, {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit',
			weekday: 'long',
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
		})
}

export function isTimeDiffSignificant(
	date1?: string | Date,
	date2?: string | Date,
	// 对于时间差的敏感程度，0~1 之间
	threshold: number = 0.6,
) {
	if (!date1 || !date2)
		return false

	const now = Date.now()

	const diff1 = differenceInMilliseconds(now, date1)
	const diff2 = differenceInMilliseconds(now, date2)
	return diff1 / diff2 < threshold || diff2 / diff1 < threshold
}
