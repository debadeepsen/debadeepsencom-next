export const formatDate = (dateString: string) => {
  const [day, month, year] = dateString.split('/')
  return new Date(`${year}-${month}-${day}`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}
