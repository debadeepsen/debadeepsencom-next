import { TimelineItemType } from '@/types/types'

const formatDate = (dateString: string): string => {
  const [day, month, year] = dateString.split('/')
  return new Date(`${year}-${month}-${day}`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long'
  })
}

export const generateWorkHistoryText = (
  timelineData: TimelineItemType[]
): string => {
  let text = 'WORK HISTORY\n'
  text += '='.repeat(50) + '\n\n'
  timelineData.forEach(item => {
    if ('type' in item && item.type === 'gap_in_experience') {
      text += `GAP IN EMPLOYMENT (${item.duration_string})\n`
      text += `${formatDate(item.period.from_dd_mm_yy)} - ${formatDate(
        item.period.to_dd_mm_yy
      )}\n`
      text += `Reason: ${item.reason}\n\n`
    } else if ('employer' in item) {
      const job = item
      text += `${job.last_position_held_designation.toUpperCase()}\n`
      text += `${job.employer.name}\n`
      text += `${formatDate(job.period.from_dd_mm_yy)} - ${formatDate(
        job.period.to_dd_mm_yy
      )} (${job.duration_period_years} ${
        job.duration_period_years === 1 ? 'Year' : 'Years'
      })\n`
      text += `${job.employer.address}\n`
      if (job.immediate_superior) {
        text += `Supervisor: ${job.immediate_superior.name} (${job.immediate_superior.designation})\n`
      }
      if (job.gross_emoluments_rs_per_month) {
        text += `Salary: ₹${job.gross_emoluments_rs_per_month.last_drawn.toLocaleString()}/month\n`
      }
      text += `\nResponsibilities:\n${job.nature_of_duties}\n\n`
      text += '-'.repeat(50) + '\n\n'
      // Add a page break after each job for better printing
      //   text += '\f\n'
    }
  })

  // Add a simple footer
  text += '\n\n'
  return text
}

export const downloadTextFile = (content: string, filename: string): void => {
  const blob = new Blob([content], { type: 'text/plain' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}
