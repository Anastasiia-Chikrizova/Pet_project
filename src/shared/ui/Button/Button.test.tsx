import { render, screen } from '@testing-library/react';
import { classNames } from '../../lib/classNames/className';
import { Button } from './Button';

describe('classNames', () => {
    test('with only first param', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
});
