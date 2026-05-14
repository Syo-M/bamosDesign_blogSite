import BamosHeadings from './BamosHeadings';

export default {
    title: 'Components/BamosHeadings',
    component: BamosHeadings,
    tags: ['autodocs'],
    argTypes: {
        headingText: {
            control: 'text',
            description: '見出しとして表示するテキスト',
        },
        fontSize: {
            control: 'text',
            description: '見出しの文字サイズ。例：1.5rem、24px、2em など',
        },
    },
};

export const Default = {
    args: {
        headingText: 'headings',
        fontSize: '1.5rem',
    },
};

export const SectionTitle = {
    args: {
        headingText: 'Service Overview',
        fontSize: '2rem',
    },
};

export const Small = {
    args: {
        headingText: 'Small Heading',
        fontSize: '1.2rem',
    },
};

export const Large = {
    args: {
        headingText: 'Large Heading',
        fontSize: '3rem',
    },
};

export const Japanese = {
    args: {
        headingText: 'サービス紹介',
        fontSize: '2rem',
    },
};