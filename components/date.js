import { format } from 'date-fns'

export default function DateComponent({ dateString }) {
  return (
    <h6 className="uppercase font-bold tracking-hella">
      <time dateTime={dateString}>
        {format(new Date(dateString), 'LLLL	d, yyyy')}
      </time>
    </h6>
  )
}