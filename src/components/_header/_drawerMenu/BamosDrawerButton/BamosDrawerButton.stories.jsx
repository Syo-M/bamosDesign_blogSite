import { useState } from 'react';
import { expect, userEvent, within } from 'storybook/test';
import BamosDrawerButton from './BamosDrawerButton';

export default {
    title: 'Components/BamosDrawerButton',
    component: BamosDrawerButton,
    tags: ['autodocs'],
    argTypes: {
        open: {
            control: 'boolean',
            description: 'ドロワーメニューが開いているかどうか',
        },
        isOpen: {
            control: false,
            description: 'openの状態を更新するための関数',
        },
    },
};

/**
 * Storybook上でクリックして開閉状態を確認するためのラッパーコンポーネント
 */
function StatefulDrawerButton({ open: initialOpen }) {
    const [open, setOpen] = useState(initialOpen);

    return <BamosDrawerButton open={open} isOpen={setOpen} />;
}

export const Closed = {
    args: {
        open: false,
    },
    render: (args) => <StatefulDrawerButton {...args} />,
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const button = canvas.getByRole('button', {
            name: /MENU/,
        });

        await expect(button).toBeInTheDocument();

        await userEvent.click(button);

        await expect(
            canvas.getByRole('button', {
                name: /CLOSE/,
            })
        ).toBeInTheDocument();
    },
};

export const Open = {
    args: {
        open: true,
    },
    render: (args) => <StatefulDrawerButton {...args} />,
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const button = canvas.getByRole('button', {
            name: /CLOSE/,
        });

        await expect(button).toBeInTheDocument();

        await userEvent.click(button);

        await expect(
            canvas.getByRole('button', {
                name: /MENU/,
            })
        ).toBeInTheDocument();
    },
};