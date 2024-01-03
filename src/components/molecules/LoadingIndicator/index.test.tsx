
import { render, screen } from '@testing-library/react'
import { describe, it } from 'vitest';
import LoadingIndicator from '.';

describe('LoadingIndicator ', () => {
  it('should render', () => {
    render(<LoadingIndicator />)
  })

  it('should render text correctly', () => {
    render(<LoadingIndicator />)

    screen.getByText('Loading')
  })
});
