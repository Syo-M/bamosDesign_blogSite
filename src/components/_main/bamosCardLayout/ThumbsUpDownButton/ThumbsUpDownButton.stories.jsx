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
};

export const Bad = {
    args: {
        init: 0,
        GorB: false,
    },
    render: (args) => (
        <ThumbsUpDownButton key={`${args.GorB}-${args.init}`} {...args} />
    ),
};

export const InitialCount = {
    args: {
        init: 10,
        GorB: true,
    },
    render: (args) => (
        <ThumbsUpDownButton key={`${args.GorB}-${args.init}`} {...args} />
    ),
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
};