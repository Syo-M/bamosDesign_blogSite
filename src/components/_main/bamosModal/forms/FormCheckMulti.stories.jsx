import { useState } from 'react';
import { expect, userEvent, within } from 'storybook/test';
import FormCheckMulti from './FormCheckMulti';

export default {
    title: 'Components/Form/FormCheckMulti',
    component: FormCheckMulti,
    tags: ['autodocs'],
};

function FormCheckMultiPreview({ initialFavorite = [] }) {
    const [form, setForm] = useState({
        media: '',
        age: '',
        favorite: initialFavorite,
        comment: '',
    });

    return <FormCheckMulti form={form} setForm={setForm} />;
}

export const Default = {
    render: () => <FormCheckMultiPreview />,
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const music = canvas.getByRole('checkbox', {
            name: 'Music',
        });

        await expect(music).not.toBeChecked();

        await userEvent.click(music);

        await expect(music).toBeChecked();
    },
};

export const CheckedAndUnchecked = {
    render: () => <FormCheckMultiPreview initialFavorite={['music']} />,
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const music = canvas.getByRole('checkbox', {
            name: 'Music',
        });

        const art = canvas.getByRole('checkbox', {
            name: 'Art',
        });

        await expect(music).toBeChecked();
        await expect(art).not.toBeChecked();

        await userEvent.click(art);

        await expect(art).toBeChecked();

        await userEvent.click(music);

        await expect(music).not.toBeChecked();
    },
};

export const MultipleChecked = {
    render: () => <FormCheckMultiPreview initialFavorite={['music', 'design']} />,
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const music = canvas.getByRole('checkbox', {
            name: 'Music',
        });

        const design = canvas.getByRole('checkbox', {
            name: 'Design',
        });

        await expect(music).toBeChecked();
        await expect(design).toBeChecked();
    },
};