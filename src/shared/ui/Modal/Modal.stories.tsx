import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { RouterDecorator } from 'shared/config/storybook/RouteDecorator/RouteDecorator';
import { Modal } from 'shared/ui/Modal/Modal';

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {},
    decorators: [RouterDecorator],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Light: Story = {
    args: {
        isOpen: true,
        children: 'lorem',
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
    args: {
        isOpen: true,
        children: 'lorem',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
