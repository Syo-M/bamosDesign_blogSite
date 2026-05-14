import { fn } from 'storybook/test';
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
            action: 'clicked',
            description: 'クリック時に実行される関数',
        },
    },
};

export const Default = {
    args: {
        label: 'button',
        onClick: fn(),
    },
};

export const Submit = {
    args: {
        label: '送信',
        onClick: fn(),
    },
};

export const Cancel = {
    args: {
        label: 'キャンセル',
        onClick: fn(),
    },
};

export const Contact = {
    args: {
        label: 'お問い合わせ',
        onClick: fn(),
    },
};