import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest';
import DataCell from '.';

describe('DataCell component', () => {
  it('renders correctly with data', () => {
    const testData = {
      property: 'Eye Color',
      value: 'Blue',
      isLoading: false,
    };

    const { container } = render(<DataCell {...testData} />);

    const propertyElement = container.querySelector(`:text("${testData.property}")`);
    const valueElement = container.querySelector(`:text("${testData.value}")`);

    expect(propertyElement).toBeTruthy();
    expect(valueElement).toBeTruthy();
  });

  it('renders Skeleton when loading', () => {
    const loadingData = {
      property: 'Snowspeeder',
      isLoading: true,
    };

    const { container } = render(<DataCell { ...loadingData } />);

    const propertyElement = container.querySelector('.MuiTypography-root .MuiTypography-h2');
    const skeletonElement = container.querySelector('.MuiSkeleton-root');

    expect(skeletonElement).toBeTruthy();
    expect(propertyElement).toBeFalsy();
  });
});
