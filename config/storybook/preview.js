import {StyleDecorator} from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';

const preview = {
    parameters: {
        actions: {argTypesRegex: '^on[A-Z].*'},
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        decorators: [StyleDecorator],
    },

};

export default preview;