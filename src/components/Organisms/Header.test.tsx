import '@testing-library/jest-dom'
import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Headerコンポーネントのテスト', () => {
    it('ヘッダーにサイト名"Simple News"を指定する', () => {
        render(<Header name="Simple News" />);
        expect(screen.getByText('Simple News')).toBeInTheDocument();
    });
})