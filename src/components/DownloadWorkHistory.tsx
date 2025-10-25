'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { TimelineItemType } from '@/types/types'
import timelineData from '@/data/timeline_data.json'

// Dynamically import the PDF components with SSR disabled
const PDFDownloadLink = dynamic(
  () => import('@react-pdf/renderer').then((mod) => mod.PDFDownloadLink),
  { ssr: false }
)

const WorkHistoryPDF = dynamic(
  () => import('./WorkHistoryPDF'),
  { ssr: false }
)

const DownloadWorkHistory = () => {
  const [isGenerating, setIsGenerating] = useState(false)
  
  return (
    <div className='my-4 text-center'>
      <PDFDownloadLink
        document={<WorkHistoryPDF data={timelineData as TimelineItemType[]} />}
        fileName={`work_history_${new Date().toISOString().split('T')[0]}.pdf`}
        className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
        onClick={() => setIsGenerating(true)}
      >
        {({ loading }) => (
          <div className='flex items-center gap-2'>
            <svg
              className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`}
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4'
              />
            </svg>
            {loading ? 'Generating PDF...' : 'Download Work History (PDF)'}
          </div>
        )}
      </PDFDownloadLink>
      
      {isGenerating && (
        <p className='text-sm text-gray-500 mt-2'>
          Generating PDF... This may take a moment.
        </p>
      )}
    </div>
  )
}

export default DownloadWorkHistory
