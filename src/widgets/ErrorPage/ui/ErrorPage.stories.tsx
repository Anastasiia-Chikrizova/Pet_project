import type { Meta, StoryObj } from '@storybook/react';
import { ErrorPage } from 'widgets/ErrorPage/ui/ErrorPage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof ErrorPage> = {
    title: 'widgets/ErrorPage',
    component: ErrorPage,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ErrorPage>;

export const Light: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
