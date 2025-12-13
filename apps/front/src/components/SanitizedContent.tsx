"use client"
import React from 'react';
import DOMPurify from "dompurify";

type Props = {
  content: string;
}

const SanitizedContent = (props:Props) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(props.content) }}
    />
  );
}

export default SanitizedContent;
