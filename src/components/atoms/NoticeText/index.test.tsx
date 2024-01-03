
import { render, screen } from '@testing-library/react'
import { describe, it } from 'vitest';
import NoticeText from '.';

describe('NoticeText ', () => {
  it('should render', () => {
    render(<NoticeText />)
  })

  it('should render text correctly', () => {
    render(<NoticeText />)

    screen.getByText('Failed to Load Data')
  })
});
