import { useState } from 'react';
import { expect, userEvent, within } from 'storybook/test';
import FormRadio from './FormRadio';

export default {
    title: 'Components/Form/FormRadio',
    component: FormRadio,
    tags: ['autodocs'],
};

function FormRadioPreview({ initialAge = '' }) {
    const [form, setForm] = useState({
        media: '',
        age: initialAge,
        favorite: [],
        comment: '',
    });

    return <FormRadio form={form} setForm={setForm} />;
}

export const Default = {
    render: () => <FormRadioPreview />,
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const radio = canvas.getByLabelText(/20\s*-\s*30/);

        await userEvent.click(radio);

        await expect(radio).toBeChecked();
    },
};

export const Checked = {
    render: () => <FormRadioPreview initialAge="30-40" />,
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const radio = canvas.getByLabelText(/30\s*-\s*40/);

        await expect(radio).toBeChecked();
    },
};