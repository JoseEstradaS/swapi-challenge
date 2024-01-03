import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Person } from '../../../types';
import PersonCell from '.';

describe('PersonCell component', () => {
  it('renders correctly with proper text content', async () => {
    const person = {
      name: 'Luke Skywalker',
      species: ['Human'],
      homeworld: 'Tatooine'
    } as Person;

    const onSelect = vi.fn();

    render(<PersonCell person={person} onSelect={onSelect} />);

    screen.getByText('Luke Skywalker')
  });

  it('calls onSelect function when clicked', () => {
    const person = {
      name: 'Luke Skywalker',
      species: ['Human'],
      homeworld: 'Tatooine'
    } as Person;

    const onSelect = vi.fn();

    const { getByText } = render(<PersonCell person={person} onSelect={onSelect} />);

    getByText('Luke Skywalker').click();

    expect(onSelect).toHaveBeenCalledWith(person);
  });
});
