import { expect, userEvent, within } from 'storybook/test';
import BamosModalWrap from './BamosModalWrap';

export default {
    title: 'Components/BamosModalWrap',
    component: BamosModalWrap,
    tags: ['autodocs'],
};

export const Default = {
    render: () => <BamosModalWrap />,
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const feedbackButton = canvas.getByRole('button', {
            name: 'Feedback',
        });

        await expect(feedbackButton).toBeInTheDocument();

        await expect(
            canvas.queryByRole('heading', {
                name: 'FEEDBACK',
            })
        ).not.toBeInTheDocument();

        await userEvent.click(feedbackButton);

        await expect(
            canvas.getByRole('heading', {
                name: 'FEEDBACK',
            })
        ).toBeInTheDocument();
    },
};