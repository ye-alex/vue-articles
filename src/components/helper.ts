export const formattedDate = (dateStr: string): string => {
  const date = new Date(dateStr)
  const options: Intl.DateTimeFormatOptions = { month: 'long', day: '2-digit' }

  return date.toLocaleDateString('en-US', options)
}

export const isRecentDate = (dateStr: string): boolean => {
  const date = new Date(dateStr)
  const currentDate = new Date()
  const differenceInTime = currentDate.getTime() - date.getTime()
  const differenceInDays = differenceInTime / (1000 * 3600 * 24)

  if (differenceInDays < 0) {
    return false
  }

  return differenceInDays <= 7
}
