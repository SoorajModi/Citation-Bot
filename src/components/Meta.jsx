import React from 'react';
import DocumentMeta from 'react-document-meta';

const meta = {
  title: 'Citation Manager',
  description: 'Manage citations for your projects',
  author: 'Sooraj Modi',
  // canonical: 'http://example.com/path/to/page',
  viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'react,meta,document,html,tags',
    },
  },
};

function Meta() {
  return (
    <DocumentMeta {...meta} />
  );
}

export default Meta;
