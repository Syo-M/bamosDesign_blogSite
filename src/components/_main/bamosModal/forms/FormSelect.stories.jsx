import { useState } from 'react';
import { expect, userEvent, within } from 'storybook/test';
import FormSelect from './FormSelect';

export default {
    title: 'Components/Form/FormSelect',
    component: FormSelect,
    tags: ['autodocs'],
};

function FormSelectPreview({ initialMedia = '' }) {
    const [form, setForm] = useState({
        media: initialMedia,
        age: '',
        favorite: [],
        comment: '',
    });

    return <FormSelect form={form} setForm={setForm} />;
}

export const Default = {
    render: () => <FormSelectPreview />,
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const select = canvas.getByRole('combobox');

        await userEvent.selectOptions(select, 'sns');

        await expect(select).toHaveValue('sns');
    },
};

export const Selected = {
    render: () => <FormSelectPreview initialMedia="movie" />,
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const select = canvas.getByRole('combobox');

        await expect(select).toHaveValue('movie');
    },
};