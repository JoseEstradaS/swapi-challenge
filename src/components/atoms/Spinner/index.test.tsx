import { render, screen } from '@testing-library/react'
import { describe, it } from 'vitest';
import Spinner from '.';

describe('Spinner ', () => {
  it('should render', () => {
    render(<Spinner />)
  })

  it('should render alt correctly', () => {
    render(<Spinner />)

    screen.getByAltText('Loading...')
  })
});
