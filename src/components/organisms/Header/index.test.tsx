import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { Person } from '../../../types';
import Header from '.';

describe('Header component', () => {
  it('renders with default title when no person is selected', () => {    
    const { container } = render(<Header isMobile onBack={() => {}} />);

    const backButton = container.querySelector('button[aria-label="Go back"]');
    const titleElement = container.querySelector('header > div > div');

    expect(backButton).toBeFalsy();
    expect(titleElement).toBeTruthy();
    expect(titleElement!.textContent).toBe('People of Star Wars');
  });

  it('renders with person name and back button when a person is selected', () => {
    const selectedPerson = { name: 'Luke Skywalker' } as Person;
    
    const { container } = render(<Header isMobile selectedPerson={selectedPerson} onBack={() => {}} />);

    const backButton = container.querySelector('button[aria-label="Go back"]');
    const titleElement = container.querySelector('header > div > div');

    expect(backButton).toBeTruthy();
    expect(titleElement).toBeTruthy();
    expect(titleElement!.textContent).toBe('Luke Skywalker');
  });
});
