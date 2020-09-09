import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import markdownStyles from './markdown-styles.module.css'

export default function PostBody({ content }) {
  return (
    <div className="max-w-4xl mx-auto mb-48">
      <div className={markdownStyles['markdown']}>
        {documentToReactComponents(content)}
      </div>
    </div>
  )
}