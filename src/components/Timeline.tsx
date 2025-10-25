import timelineData from '@/data/timeline_data.json'
import { formatDate } from '@/lib/utils/utils'
import { TimelineItemType, JobEntry, GapEntry } from '@/types/types'
import DownloadWorkHistory from './DownloadWorkHistory'

interface TimelineItemProps {
  data: TimelineItemType
  isOdd: boolean
}

const TimelineItem = ({ data, isOdd }: TimelineItemProps) => {
  const isGap = data.type === 'gap_in_experience'

  const itemClasses = isOdd
    ? 'md:text-left md:col-start-1 md:col-end-5'
    : 'md:col-start-6 md:col-end-11'

  const lineClasses = isOdd
    ? 'md:col-start-5 md:col-end-6 md:justify-end'
    : 'md:col-start-6 md:col-end-7 md:justify-start'

  const dotColor = isGap ? 'bg-red-400' : 'bg-indigo-600'
  const headerColor = isGap ? 'text-red-600' : 'text-indigo-800'

  const fromDate = data.period.from_dd_mm_yy
  const toDate = data.period.to_dd_mm_yy

  return (
    <div className='flex md:contents'>
      <div
        className={`col-start-1 col-end-11 p-4 rounded-xl my-4 shadow-md border 
          ${
            isGap
              ? 'bg-red-50/70 dark:bg-red-900/20 border-red-200 dark:border-red-800/50'
              : 'bg-white dark:bg-gray-800/50 border-gray-200 dark:border-gray-700'
          } 
          ${itemClasses} transition-colors duration-200`}
      >
        {isGap ? (
          <div className='text-sm'>
            <h3
              className={`font-bold ${
                isGap
                  ? 'text-red-600 dark:text-red-400'
                  : 'text-indigo-800 dark:text-indigo-300'
              } mb-1`}
            >
              {(data as GapEntry).description}
            </h3>
            <p className='text-xs text-gray-500 dark:text-gray-400 italic mb-0'>
              {formatDate(fromDate)} – {formatDate(toDate)}
            </p>
            <p className='text-sm text-gray-600 dark:text-gray-300 inline-block'>
              <strong className='text-gray-700 dark:text-gray-200'>
                Reason:
              </strong>{' '}
              {(data as GapEntry).reason}
            </p>
          </div>
        ) : (
          <>
            <h3
              className={`text-xl font-semibold ${
                isGap
                  ? 'text-red-600 dark:text-red-400'
                  : 'text-indigo-800 dark:text-indigo-300'
              }`}
            >
              {(data as JobEntry).last_position_held_designation}
            </h3>
            <p className='text-base font-medium text-gray-700 dark:text-gray-200 mt-1'>
              {(data as JobEntry).employer.name}
            </p>
            <p className='text-sm text-gray-500 dark:text-gray-400 mb-2'>
              {formatDate(fromDate)} – {formatDate(toDate)} (
              {data.duration_period_years} Yrs)
            </p>
            <p className='text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700 pt-2 mt-2 text-sm'>
              {(data as JobEntry).nature_of_duties}
            </p>
          </>
        )}
      </div>

      <div
        className={`col-start-5 col-end-7 flex md:col-start-5 md:col-end-7 ${lineClasses}`}
      >
        <div className='h-full w-6 flex items-center justify-center'>
          <div className='h-full w-0.5 bg-gray-300 pointer-events-none'></div>
        </div>
      </div>
    </div>
  )
}

const Timeline = () => {
  return (
    <div className='px-4 md:px-6'>
      {/* <DownloadWorkHistory /> */}
      <div className='grid grid-cols-1 md:grid-cols-11 relative'>
        {(timelineData as TimelineItemType[]).map((item, index) => (
          <TimelineItem key={index} data={item} isOdd={index % 2 !== 0} />
        ))}
      </div>
    </div>
  )
}

export default Timeline
