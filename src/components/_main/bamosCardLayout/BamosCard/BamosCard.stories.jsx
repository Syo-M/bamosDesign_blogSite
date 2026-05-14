import BamosCard from './BamosCard';

const sampleImage = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400">
  <rect width="600" height="400" fill="#f0eee9"/>
  <rect x="60" y="60" width="480" height="280" rx="24" fill="#111827"/>
  <text x="300" y="210" text-anchor="middle" font-size="36" fill="#ffffff" font-family="Arial, sans-serif">
    Bamos Card
  </text>
</svg>
`)}`;

export default {
    title: 'Components/BamosCard',
    component: BamosCard,
    tags: ['autodocs'],
    argTypes: {
        author: {
            control: 'text',
            description: '作者名',
        },
        title: {
            control: 'text',
            description: 'カードのタイトル',
        },
        category: {
            control: 'text',
            description: 'カードのカテゴリー',
        },
        image: {
            control: 'text',
            description: 'カードに表示する画像のパス、またはURL',
        },
        thumbsUp: {
            control: {
                type: 'number',
            },
            description: 'いいね数の初期値',
        },
        thumbsDown: {
            control: {
                type: 'number',
            },
            description: 'バッド数の初期値',
        },
    },
};

export const Default = {
    args: {
        author: 'Bamos User',
        title: 'Sample Work',
        category: 'Design',
        image: sampleImage,
        thumbsUp: 12,
        thumbsDown: 3,
    },
    render: (args) => (
        <BamosCard
            key={`${args.title}-${args.thumbsUp}-${args.thumbsDown}`}
            {...args}
        />
    ),
};

export const WebDesign = {
    args: {
        author: '本山 翔',
        title: 'Portfolio Website',
        category: 'Web Design',
        image: sampleImage,
        thumbsUp: 24,
        thumbsDown: 1,
    },
    render: (args) => (
        <BamosCard
            key={`${args.title}-${args.thumbsUp}-${args.thumbsDown}`}
            {...args}
        />
    ),
};

export const Illustration = {
    args: {
        author: 'Bamos Artist',
        title: 'Character Illustration',
        category: 'Illustration',
        image: sampleImage,
        thumbsUp: 48,
        thumbsDown: 5,
    },
    render: (args) => (
        <BamosCard
            key={`${args.title}-${args.thumbsUp}-${args.thumbsDown}`}
            {...args}
        />
    ),
};

export const Gallery = {
    render: () => (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '24px',
                maxWidth: '960px',
            }}
        >
            <BamosCard
                author="Bamos User"
                title="Sample Work"
                category="Design"
                image={sampleImage}
                thumbsUp={12}
                thumbsDown={3}
            />

            <BamosCard
                author="本山 翔"
                title="Portfolio Website"
                category="Web Design"
                image={sampleImage}
                thumbsUp={24}
                thumbsDown={1}
            />

            <BamosCard
                author="Bamos Artist"
                title="Character Illustration"
                category="Illustration"
                image={sampleImage}
                thumbsUp={48}
                thumbsDown={5}
            />
        </div>
    ),
};