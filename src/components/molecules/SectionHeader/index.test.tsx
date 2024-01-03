
import { render, screen } from '@testing-library/react'
import { describe, it } from 'vitest';
import SectionHeader from '.';

describe('SectionHeader ', () => {
  const title = 'People'

  it('should render', () => {
    render(<SectionHeader title={title} />)
  })

  it('should render text correctly', () => {
    render(<SectionHeader title={title} />)

    screen.getByText(`${title}`)
  })
});
