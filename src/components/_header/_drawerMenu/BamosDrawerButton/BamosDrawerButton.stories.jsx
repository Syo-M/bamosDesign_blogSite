import { useState } from 'react';
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

export const Default = {
    args: {
        open: false,
    },
    render: (args) => <StatefulDrawerButton {...args} />,
};

export const Open = {
    args: {
        open: true,
    },
    render: (args) => <StatefulDrawerButton {...args} />,
};

export const Closed = {
    args: {
        open: false,
    },
    render: (args) => <StatefulDrawerButton {...args} />,
};