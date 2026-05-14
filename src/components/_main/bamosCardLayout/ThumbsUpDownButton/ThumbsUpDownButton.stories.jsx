import { expect, userEvent, within } from 'storybook/test';
import ThumbsUpDownButton from './ThumbsUpDownButton';

export default {
    title: 'Components/ThumbsUpDownButton',
    component: ThumbsUpDownButton,
    tags: ['autodocs'],
    argTypes: {
        init: {
            control: {
                type: 'number',
            },
            description: '初期表示されるカウント数',
        },
        GorB: {
            control: 'boolean',
            description: 'trueの場合はいいねボタン、falseの場合はバッドボタン',
        },
    },
};

export const Good = {
    args: {
        init: 0,
        GorB: true,
    },
    render: (args) => (
        <ThumbsUpDownButton key={`${args.GorB}-${args.init}`} {...args} />
    ),
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const button = canvas.getByRole('button');

        await expect(canvas.getByText('0')).toBeInTheDocument();

        await userEvent.click(button);

        await expect(canvas.getByText('1')).toBeInTheDocument();

        await userEvent.click(button);

        await expect(canvas.getByText('0')).toBeInTheDocument();
    },
};

export const Bad = {
    args: {
        init: 0,
        GorB: false,
    },
    render: (args) => (
        <ThumbsUpDownButton key={`${args.GorB}-${args.init}`} {...args} />
    ),
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const button = canvas.getByRole('button');

        await expect(canvas.getByText('0')).toBeInTheDocument();

        await userEvent.click(button);

        await expect(canvas.getByText('1')).toBeInTheDocument();

        await userEvent.click(button);

        await expect(canvas.getByText('0')).toBeInTheDocument();
    },
};

export const InitialCount = {
    args: {
        init: 10,
        GorB: true,
    },
    render: (args) => (
        <ThumbsUpDownButton key={`${args.GorB}-${args.init}`} {...args} />
    ),
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const button = canvas.getByRole('button');

        await expect(canvas.getByText('10')).toBeInTheDocument();

        await userEvent.click(button);

        await expect(canvas.getByText('11')).toBeInTheDocument();

        await userEvent.click(button);

        await expect(canvas.getByText('10')).toBeInTheDocument();
    },
};

export const WithoutProps = {
    render: () => <ThumbsUpDownButton />,
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const button = canvas.getByRole('button');

        await expect(canvas.getByText('0')).toBeInTheDocument();

        await userEvent.click(button);

        await expect(canvas.getByText('1')).toBeInTheDocument();
    },
};

export const All = {
    render: () => (
        <div
            style={{
                display: 'flex',
                gap: '24px',
                alignItems: 'center',
            }}
        >
            <ThumbsUpDownButton init={12} GorB={true} />
            <ThumbsUpDownButton init={3} GorB={false} />
        </div>
    ),
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const buttons = canvas.getAllByRole('button');

        await expect(canvas.getByText('12')).toBeInTheDocument();
        await expect(canvas.getByText('3')).toBeInTheDocument();

        await userEvent.click(buttons[0]);
        await userEvent.click(buttons[1]);

        await expect(canvas.getByText('13')).toBeInTheDocument();
        await expect(canvas.getByText('4')).toBeInTheDocument();
    },
};