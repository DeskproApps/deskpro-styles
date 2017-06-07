import React from 'react';
import { storiesOf } from '@storybook/react';
import classNames from 'classnames';
import Button from 'Components/Button';
import { withKnobs, boolean } from '@storybook/addon-knobs';
/* eslint-disable react/prop-types*/

storiesOf('Buttons', module)
  .addDecorator(withKnobs)
  .addWithPropsCombinations(
    'Button',
    Button,
  {
    className: ['dp-button--primary', 'dp-button--secondary', 'dp-button--cta'],
    children:  ['Button', 'Long text button', <b>Bold content</b>]
  },
  {
    CombinationRenderer({ Component, props }) {
      const { className, ...elementProps } = props;
      return (
        <div>
          <Component
            className={classNames('dp-button--s', className)}
            disabled={boolean('Disabled', false)}
            {...elementProps}
          /><br /><br />
          <Component
            className={classNames('dp-button--m', className)}
            disabled={boolean('Disabled', false)}
            {...elementProps}
          /><br /><br />
          <Component
            className={classNames('dp-button--l', className)}
            disabled={boolean('Disabled', false)}
            {...elementProps}
          /><br /><br />
        </div>
      );
    }
  }
  )
;
