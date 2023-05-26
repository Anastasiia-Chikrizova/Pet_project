import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';

export const RouterDecorator = (Story: () => any) => (
    <BrowserRouter>
        <Suspense fallback={<div>...</div>}>
            {Story()}
        </Suspense>
    </BrowserRouter>
);
