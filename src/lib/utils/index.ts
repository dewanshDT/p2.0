function formatDate(dateStr: string) {
  const date = new Date(dateStr)
  const formattedDate = date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const day = date.getDate()
  const daySuffix = getDaySuffix(day)

  return formattedDate.replace(/(\d+)([^\d])$/, `$1${daySuffix}$2`)
}

function getDaySuffix(day: number) {
  if (day >= 11 && day <= 13) {
    return "th"
  }
  switch (day % 10) {
    case 1:
      return "st"
    case 2:
      return "nd"
    case 3:
      return "rd"
    default:
      return "th"
  }
}

function countReadingTime(content: string) {
  const wordsPerMinute = 250
  const words = content.split(/\s+/).length
  const readingTime = Math.ceil(words / wordsPerMinute)

  return readingTime
}

export { formatDate, countReadingTime }
