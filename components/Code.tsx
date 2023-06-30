'use client'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

type Props = {
  code?: string
  language?: string
}

export default function Code(props: Props) {
  return (
    <SyntaxHighlighter
      language={props?.language || 'text'}
      style={atomDark}
      showLineNumbers
      CodeTag={(props) => (
        <code
          {...props}
          style={{ fontFamily: 'var(--font-roboto-mono)', fontSize: '0.8rem' }}
        />
      )}
    >
      {props.code || ''}
    </SyntaxHighlighter>
  )
}
