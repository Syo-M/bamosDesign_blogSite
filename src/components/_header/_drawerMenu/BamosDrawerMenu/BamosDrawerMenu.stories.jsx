import BamosDrawerMenu from './BamosDrawerMenu';

export default {
    title: 'Components/BamosDrawerMenu',
    component: BamosDrawerMenu,
    tags: ['autodocs'],
    argTypes: {
        open: {
            control: 'boolean',
            description: 'ドロワーメニューが開いているかどうか',
        },
    },
};

export const Closed = {
    args: {
        open: false,
    },
};

export const Open = {
    args: {
        open: true,
    },
};

export const Preview = {
    args: {
        open: true,
    },
    render: (args) => (
        <div
            style={{
                minHeight: '300px',
                backgroundColor: '#f5f5f5',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <BamosDrawerMenu {...args} />
        </div>
    ),
};