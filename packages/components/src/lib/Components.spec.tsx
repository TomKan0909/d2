import { render } from '@testing-library/react';

import Components from './Components';

describe('Components', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components />);
    expect(baseElement).toBeTruthy();
  });
});
