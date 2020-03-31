import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';
import {Button} from 'react-native';

import PrButton from '../PrButton';

test('should display the test in the button', () => {
  const callback = jest.fn();
  const {getByText} = render(<PrButton title="hey" onPress={callback} />);
  expect(getByText('hey')).toBeTruthy();
  fireEvent.press(getByText('hey'));
  expect(callback).not.toHaveBeenCalled();
});
