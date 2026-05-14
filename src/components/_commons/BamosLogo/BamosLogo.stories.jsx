import BamosLogo from './BamosLogo';

export default {
    title: 'Components/BamosLogo',
    component: BamosLogo,
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: 'select',
            options: ['black', 'white', 'accent'],
            description: '表示するロゴの種類',
        },
    },
};

export const Black = {
    args: {
        type: 'black',
    },
};

export const Accent = {
    args: {
        type: 'accent',
    },
};

export const White = {
    args: {
        type: 'white',
    },
    render: (args) => (
        <div
            style={{
                backgroundColor: '#111',
                padding: '24px',
                display: 'inline-block',
            }}
        >
            <BamosLogo {...args} />
        </div>
    ),
};

export const All = {
    render: () => (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                alignItems: 'flex-start',
            }}
        >
            <div>
                <p>black</p>
                <BamosLogo type="black" />
            </div>

            <div>
                <p>accent</p>
                <BamosLogo type="accent" />
            </div>

            <div
                style={{
                    backgroundColor: '#111',
                    padding: '24px',
                }}
            >
                <p style={{ color: '#fff' }}>white</p>
                <BamosLogo type="white" />
            </div>
        </div>
    ),
};