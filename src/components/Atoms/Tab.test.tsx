import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Tab from './Tab';

describe('Tabコンポーネントのテスト', () => {
    it('タブの名前をBusinessにする', () => {
        render(<Tab tabName="Business" tabID="/business" />);
        expect(screen.getByText('Business')).toBeInTheDocument();
    });

    it('タブの名前を指定しない', () => {
        render(<Tab tabName='' tabID="test-id" />);
        expect(screen.getByText('Tab')).toBeInTheDocument();
    });

    it('タブを赤色にする', () => {
        render(<Tab tabName="TestTab" tabID="test-id" backgroundColor="bg-red-500" />);
        const tabElement = screen.getByText('TestTab');
        expect(tabElement).toHaveClass('bg-red-500');
    });

    it('タブの背景色を指定しない', () => {
        render(<Tab tabName="TestTab" tabID="test-id" />);
        const tabElement = screen.getByText('TestTab');
        expect(tabElement).toHaveClass('bg-gray-900');
    });
});
