import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SelectableList from '../../../../src/Components/Common/SelectableList';
import { ListElement } from '../../../../src/Components/Common';

storiesOf('Lists', module)
  .add('Selectable', () => (
    <div style={{ width: 200 }}>
      <SelectableList onSelect={action('selected')} onChange={action('changed')}>
        <ListElement>Android feedback</ListElement>
        <ListElement>Customer service feedback</ListElement>
        <ListElement>E-commerce feedback</ListElement>
        <ListElement>Feedback (Sales)</ListElement>
        <ListElement>Feedback (Support)</ListElement>
      </SelectableList>
    </div>
  ));

