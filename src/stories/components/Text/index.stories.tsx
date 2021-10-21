import React from 'react';
import Text from '../../../components/Text';

export default {
  title: 'Component/Text/Primary',
  component: Text,
};

// Normal Button
export const Base = () => (
  <>
    <Text type="h1">Header 1</Text>
    <Text type="h2">Header 2</Text>
    <Text type="subheader">Subheader</Text>
    <Text type="p">Paragraph</Text>
  </>
);
