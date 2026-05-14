import { useState } from 'react';
import { expect, userEvent, within } from 'storybook/test';
import FormTextarea from './FormTextarea';

export default {
    title: 'Components/Form/FormTextarea',
    component: FormTextarea,
    tags: ['autodocs'],
};

function FormTextareaPreview({ initialComment = '' }) {
    const [form, setForm] = useState({
        media: '',
        age: '',
        favorite: [],
        comment: initialComment,
    });

    return <FormTextarea form={form} setForm={setForm} />;
}

export const Default = {
    render: () => <FormTextareaPreview />,
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const textarea = canvas.getByRole('textbox');

        await userEvent.type(textarea, 'とても良いサイトです。');

        await expect(textarea).toHaveValue('とても良いサイトです。');
    },
};

export const WithComment = {
    render: () => <FormTextareaPreview initialComment="初期コメントです。" />,
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const textarea = canvas.getByRole('textbox');

        await expect(textarea).toHaveValue('初期コメントです。');
    },
};