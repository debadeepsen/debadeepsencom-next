import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Link
} from '@react-pdf/renderer'
import { TimelineItemType } from '@/types/types'

// Register a font (you can replace this with your preferred font)
// Font.register({
//   family: 'Helvetica',
//   fonts: [
//     { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf' },
//     { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf', fontWeight: 'bold' },
//     { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-italic-webfont.ttf', fontStyle: 'italic' },
//   ],
// })

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Helvetica',
    lineHeight: 1.4,
    color: '#333'
  },
  header: {
    marginBottom: 20,
    paddingBottom: 10,
    borderBottom: '1px solid #e0e0e0'
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#2c3e50'
  },
  subtitle: {
    fontSize: 11,
    color: '#7f8c8d'
  },
  section: {
    marginBottom: 30
  },
  jobHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5
  },
  jobTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#2c3e50'
  },
  company: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#3498db',
    marginBottom: 1
  },
  date: {
    fontSize: 11,
    color: '#7f8c8d',
    fontStyle: 'italic'
  },
  location: {
    fontSize: 10,
    color: '#7f8c8d',
    marginBottom: 5
  },
  description: {
    fontSize: 11,
    marginTop: 5,
    textAlign: 'justify'
  },
  gap: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 4,
    marginBottom: 15,
    borderLeft: '4px solid #e74c3c'
  },
  job: {
    backgroundColor: '#f8fafc',
    padding: 15,
    borderRadius: 4,
    marginBottom: 15,
    borderLeft: '4px solid #3498db'
  },
  gapText: {
    fontSize: 11,
    color: '#7f8c8d'
  },
  gapTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#e74c3c',
    marginBottom: 5
  },


})

const formatDate = (dateString: string): string => {
  const [day, month, year] = dateString.split('/')
  return new Date(`${year}-${month}-${day}`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short'
  })
}

interface WorkHistoryPDFProps {
  data: TimelineItemType[]
}

const WorkHistoryPDF = ({ data }: WorkHistoryPDFProps) => {
  return (
    <Document>
      <Page size='A4' style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.title}>Professional Work History</Text>
        </View>

        {data.map((item, index) => {
          if ('type' in item && item.type === 'gap_in_experience') {
            return (
              <View key={`gap-${index}`} style={styles.gap}>
                <Text style={styles.gapTitle}>
                  Gap in Employment ({item.duration_string})
                </Text>
                <Text style={styles.gapText}>
                  {formatDate(item.period.from_dd_mm_yy)} -{' '}
                  {formatDate(item.period.to_dd_mm_yy)}
                </Text>
                <Text style={{ ...styles.gapText, marginTop: 1 }}>
                  <Text style={{ fontWeight: 'bold' }}>Reason:</Text>{' '}
                  {item.reason}
                </Text>
              </View>
            )
          }

          if ('employer' in item) {
            const job = item
            return (
              <View key={`job-${index}`} style={styles.job}>
                <View style={styles.jobHeader}>
                  <View>
                    <Text style={styles.jobTitle}>
                      {job.last_position_held_designation}
                    </Text>
                    <Text style={styles.company}>{job.employer.name}</Text>
                  </View>
                  <Text style={styles.date}>
                    {formatDate(job.period.from_dd_mm_yy)} -{' '}
                    {formatDate(job.period.to_dd_mm_yy)}
                    {' • '}
                    {job.duration_period_years}{' '}
                    {job.duration_period_years === 1 ? 'Year' : 'Years'}
                  </Text>
                </View>

                <Text style={styles.location}>{job.employer.address}</Text>

                {job.immediate_superior && (
                  <Text
                    style={{ fontSize: 11, color: '#7f8c8d', marginBottom: 8 }}
                  >
                    <Text style={{ fontWeight: 'bold' }}>Supervisor:</Text>{' '}
                    {job.immediate_superior.name} (
                    {job.immediate_superior.designation})
                  </Text>
                )}

                <View style={{ marginTop: 5 }}>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: 'bold',
                      marginBottom: 1
                    }}
                  >
                    Responsibilities:
                  </Text>
                  <Text style={styles.description}>{job.nature_of_duties}</Text>
                </View>
              </View>
            )
          }
          return null
        })}


      </Page>
    </Document>
  )
}

export default WorkHistoryPDF
