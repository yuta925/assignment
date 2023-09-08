import '@testing-library/jest-dom'
import React from 'react';
import { render, screen } from '@testing-library/react';
import Tab from './Tab';

describe('Tab component', () => {
    it('renders the tab name', () => {
        render(<Tab tabName="TestTab" tabID="test-id" />);
        expect(screen.getByText('TestTab')).toBeInTheDocument();
    });

    it('uses default name if none is provided', () => {
        render(<Tab tabID="test-id" tabName=''/>);
        expect(screen.getByText('Tab')).toBeInTheDocument();
    });

    it('applies the default background color if none is provided', () => {
        render(<Tab tabName="TestTab" tabID="test-id" />);
        const tabElement = screen.getByText('TestTab');
        expect(tabElement).toHaveClass('bg-gray-900');
    });

    it('applies the provided background color', () => {
        render(<Tab tabName="TestTab" tabID="test-id" backgroundColor="bg-red-500" />);
        const tabElement = screen.getByText('TestTab');
        expect(tabElement).toHaveClass('bg-red-500');
    });
});
