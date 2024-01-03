import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest';
import LoadingCell from '.';

describe('LoadingCell component', () => {
  it('should have correct padding and centered content', () => {
    const { container } = render(<LoadingCell isMobile />);

    const loadingCell = container.querySelector('.MuiBox-root') as HTMLElement;

    const style = window.getComputedStyle(loadingCell);

    expect(style.paddingTop).toBe('16px');
    expect(style.paddingBottom).toBe('16px');
    expect(style.paddingRight).toBe('16px');
    expect(style.paddingLeft).toBe('16px');
    expect(style.display).toBe('flex');
    expect(style.justifyContent).toBe('center');
    expect(style.alignItems).toBe('center');
  });
});
