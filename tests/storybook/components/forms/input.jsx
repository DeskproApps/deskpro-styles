import React from 'react';
import classNames from 'classnames';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { Input, Label } from '../../../../src/Components/Forms';
import { faCalendar, faComment, faSearch } from '@fortawesome/free-solid-svg-icons';

storiesOf('Forms', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add(
    'Input',
    () => (
      <div>
        <h3>Sizes</h3>
        <Label>Small</Label>
        <Input
          name="input-1"
          className="dp-input--small"
          disabled={boolean('Disabled', false)}
          readOnly={boolean('Readonly', false)}
        /><br />
        <Label>Medium</Label>
        <Input
          name="input-2"
          className="dp-input--medium"
          disabled={boolean('Disabled', false)}
          readOnly={boolean('Readonly', false)}
        /><br />
        <Label>Large</Label>
        <Input
          name="input-3"
          className="dp-input--large"
          disabled={boolean('Disabled', false)}
          readOnly={boolean('Readonly', false)}
        />
        <h3>Fonts</h3>
        <Label>Email Address</Label>
        <Input
          name="input-4"
          value="hello@test.com"
          disabled={boolean('Disabled', false)}
          readOnly={boolean('Readonly', false)}
        /><br />
        <Label>Placeholder</Label>
        <Input
          name="input-5"
          placeholder="e.g. hello@test.com"
          disabled={boolean('Disabled', false)}
          readOnly={boolean('Readonly', false)}
        /><br />
        <Label>Error display</Label>
        <Input
          name="input-5"
          className="dp-input--error"
          disabled={boolean('Disabled', false)}
          readOnly={boolean('Readonly', false)}
        /><br />
        <Label>Error display</Label>
        <Input
          required
          name="input-6"
          className="dp-input--error"
          disabled={boolean('Disabled', false)}
          readOnly={boolean('Readonly', false)}
        /><br />
        <h3>Validation</h3>
        <Label>Validating</Label>
        <Input
          name="input-7"
          disabled={boolean('Disabled', false)}
          readOnly={boolean('Readonly', false)}
          validating
        /><br />
        <Label>Validated</Label>
        <Input
          name="input-8"
          disabled={boolean('Disabled', false)}
          readOnly={boolean('Readonly', false)}
          validated
        /><br />
        <h3>Icons</h3>
        <Label>With icon left</Label>
        <Input
          name="input-10"
          disabled={boolean('Disabled', false)}
          readOnly={boolean('Readonly', false)}
          icon={faSearch}
        /><br />
        <Label>With icon right</Label>
        <Input
          name="input-11"
          disabled={boolean('Disabled', false)}
          readOnly={boolean('Readonly', false)}
          iconRight={faCalendar}
        /><br />
        <h3>Visibility</h3>
        <Label>Invisible border</Label>
        <Input
          name="input-12"
          value="Support Team"
          disabled={boolean('Disabled', false)}
          readOnly={boolean('Readonly', false)}
          icon={faComment}
          invisible
        /><br /><br />
        <Label>With placeholder</Label>
        <Input
          name="input-13"
          placeholder="Add note"
          disabled={boolean('Disabled', false)}
          readOnly={boolean('Readonly', false)}
          invisible
        /><br />
        <h3>Prefix / Suffix</h3>
        <Label>Prefix</Label>
        <Input
          name="input-14"
          disabled={boolean('Disabled', false)}
          readOnly={boolean('Readonly', false)}
          className={classNames({ 'dp-input--error': boolean('Error', false) })}
          prefix="prefix"
        /><br />
        <Label>Suffix</Label>
        <Input
          name="input-15"
          disabled={boolean('Disabled', false)}
          readOnly={boolean('Readonly', false)}
          className={classNames({ 'dp-input--error': boolean('Error', false) })}
          suffix="%"
        /><br />
        <Label>Both</Label>
        <Input
          name="input-16"
          disabled={boolean('Disabled', false)}
          readOnly={boolean('Readonly', false)}
          className={classNames({ 'dp-input--error': boolean('Error', false) })}
          prefix="%"
          suffix="%"
        /><br />
      </div>
    ),
    {
      info: 'This is the basic usage of a input with the label passed as a property.'
    }
  );

