import { expect, fn, userEvent, within } from 'storybook/test';
import BamosButton from './BamosButton';

export default {
    title: 'Components/BamosButton',
    component: BamosButton,
    tags: ['autodocs'],
    argTypes: {
        label: {
            control: 'text',
            description: 'ボタンに表示するテキスト',
        },
        onClick: {
            description: 'クリック時に実行される関数',
        },
    },
};

export const Default = {
    args: {
        label: 'button',
        onClick: fn(),
    },
    play: async ({ canvasElement, args }) => {
        const canvas = within(canvasElement);

        const button = canvas.getByRole('button', {
            name: 'button',
        });

        await userEvent.click(button);

        await expect(args.onClick).toHaveBeenCalled();
    },
};

export const Submit = {
    args: {
        label: '送信',
        onClick: fn(),
    },
    play: async ({ canvasElement, args }) => {
        const canvas = within(canvasElement);

        const button = canvas.getByRole('button', {
            name: '送信',
        });

        await userEvent.click(button);

        await expect(args.onClick).toHaveBeenCalled();
    },
};

export const Cancel = {
    args: {
        label: 'キャンセル',
        onClick: fn(),
    },
    play: async ({ canvasElement, args }) => {
        const canvas = within(canvasElement);

        const button = canvas.getByRole('button', {
            name: 'キャンセル',
        });

        await userEvent.click(button);

        await expect(args.onClick).toHaveBeenCalled();
    },
};

export const Contact = {
    args: {
        label: 'お問い合わせ',
        onClick: fn(),
    },
    play: async ({ canvasElement, args }) => {
        const canvas = within(canvasElement);

        const button = canvas.getByRole('button', {
            name: 'お問い合わせ',
        });

        await userEvent.click(button);

        await expect(args.onClick).toHaveBeenCalled();
    },
};

export const WithoutProps = {
    render: () => <BamosButton />,
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const button = canvas.getByRole('button', {
            name: 'button',
        });

        await expect(button).toBeInTheDocument();

        await userEvent.click(button);
    },
};