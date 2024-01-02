import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Person } from '../../../types';
import PersonDetails from '.';

describe('PersonDetails component', () => {
  const mockPerson = {
    eye_color: 'blue',
    hair_color: 'blond',
    skin_color: 'fair',
    birth_year: '19BBY',
    vehicles: ['Snowspeeder', 'Imperial Speeder Bike']
  } as Person;

  it('renders general information for selected person', () => {
    const { container } = render(<PersonDetails selectedPerson={mockPerson} />);

    const generalInfoSection = container.querySelector('section:nth-child(1)');
    const dataCellTitles = generalInfoSection?.querySelectorAll('div:not(:first-child) h2:nth-child(odd)');
    const dataCellValues = generalInfoSection?.querySelectorAll('div:not(:first-child) h2:nth-child(even)');

    expect(generalInfoSection).toBeTruthy();
    expect(dataCellTitles).toHaveLength(4);
    expect(dataCellValues).toHaveLength(4);
  });

  it('renders vehicle section if vehicles exist for selected person', () => {
    const { container } = render(<PersonDetails selectedPerson={mockPerson} />);

    const vehicleSection = container.querySelector('section:nth-child(2)');
    const vehicleTitles = vehicleSection?.querySelectorAll('div:not(:first-child)');

    expect(vehicleSection).toBeTruthy();
    expect(vehicleTitles).toHaveLength(2);
  });

  it('does not render vehicle section if no vehicles exist for selected person', () => {
    const personWithoutVehicles: Person = {
      ...mockPerson,
      vehicles: [],
    };

    const { container } = render(<PersonDetails selectedPerson={personWithoutVehicles} />);

    const vehicleSection = container.querySelector('section:nth-child(2)');
    const vehicleTitles = vehicleSection?.querySelectorAll('h2');

    expect(vehicleSection).toBeFalsy();
    expect(vehicleTitles).toBeUndefined();
  });
});
