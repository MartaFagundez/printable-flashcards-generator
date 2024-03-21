import React from 'react';
import PropTypes from "prop-types";
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

export default function CodeBlock({code="", language="json"}) {
  return (
    <div className="d-flex w-100 mb-2">
            <SyntaxHighlighter
                className=''
                language={language}
                style={vs2015}
                wrapLines={true}
                wrapLongLines={true}
                showLineNumbers={false}
                showInlineLineNumbers={false}
            >
                {code}
            </SyntaxHighlighter>
    </div>
  )
}

CodeBlock.propTypes = {
  code: PropTypes.string,
  language: PropTypes.string
}