import Footer from './Footer';

export default {
    title: 'Layout/Footer',
    component: Footer,
    tags: ['autodocs'],
};

export const Default = {
    render: () => (
        <div
            style={{
                minHeight: '300px',
                display: 'flex',
                alignItems: 'flex-end',
                backgroundColor: '#f5f5f5',
            }}
        >
            <Footer />
        </div>
    ),
};