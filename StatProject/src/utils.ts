export const stringToDate = (str: string): Date => {
  const date = str.split('/').map((value: string): number => {
    return parseInt(value)
  })
  return new Date(date[2], date[1] - 1, date[0])
}
