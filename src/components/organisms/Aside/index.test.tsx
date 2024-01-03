import Aside from '.';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

describe('Aside component', () => {
  const mockSelectPerson = vi.fn();

  it('renders loading cell while loading data', async () => {
    const { getByText } = render(<Aside isMobile={true} onSelect={mockSelectPerson} />);

    const loadingText = getByText('Loading');

    expect(loadingText).toBeTruthy();
  });

  it('renders person cells when data is available', async () => {
    const { getAllByText } = render(<Aside isMobile={true} onSelect={mockSelectPerson} />);
    
    await waitFor(() => {
      const personNames = getAllByText(/^[a-zA-Z\s-]+$/);
      expect(personNames.length).toBeGreaterThan(0);
    });
  });

  it('calls onSelect function when a person cell is clicked', async () => {
    render(<Aside isMobile={false} onSelect={mockSelectPerson} />);
    
    await waitFor(async () => {
      const personCell = await screen.findByText('Luke Skywalker');
      personCell.click();
      expect(mockSelectPerson).toHaveBeenCalledTimes(1);
    }, { timeout: 10000 });
  }, { timeout: 10000 });
});
