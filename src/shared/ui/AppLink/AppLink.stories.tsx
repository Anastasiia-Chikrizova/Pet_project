import type { Meta, StoryObj } from '@storybook/react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RouterDecorator } from 'shared/config/storybook/RouteDecorator/RouteDecorator';

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {},
    decorators: [RouterDecorator],
    args: {
        to: '/',
    },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.PRIMARY,
    },
};

export const Secondary: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.SECONDARY,
    },
};

export const Red: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.RED,
    },
};
