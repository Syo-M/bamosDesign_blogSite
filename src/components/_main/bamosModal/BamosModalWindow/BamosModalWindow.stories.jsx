import { useState } from 'react';
import { expect, fn, userEvent, within } from 'storybook/test';
import BamosModalWindow from './BamosModalWindow';

export default {
    title: 'Components/BamosModalWindow',
    component: BamosModalWindow,
    tags: ['autodocs'],
    argTypes: {
        setIsOpen: {
            control: false,
            description: 'モーダルの開閉状態を変更するための関数',
        },
    },
};

/**
 * Storybook上でモーダルの開閉を確認するためのラッパーコンポーネント
 */
function ModalPreview() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div
            style={{
                minHeight: '500px',
                padding: '40px',
            }}
        >
            {!isOpen && (
                <button
                    type="button"
                    onClick={() => setIsOpen(true)}
                    style={{
                        padding: '12px 24px',
                        borderRadius: '999px',
                        border: 'none',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                    }}
                >
                    モーダルを開く
                </button>
            )}

            {isOpen && <BamosModalWindow setIsOpen={setIsOpen} />}
        </div>
    );
}

export const Default = {
    render: () => <ModalPreview />,
};

export const Submit = {
    args: {
        setIsOpen: fn(),
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const submitButton = canvas.getByRole('button', {
            name: 'SUBMIT',
        });

        await userEvent.click(submitButton);
    },
};

export const CloseButton = {
    args: {
        setIsOpen: fn(),
    },
    play: async ({ canvasElement, args }) => {
        const canvas = within(canvasElement);

        const closeButton = canvas.getByRole('button', {
            name: '閉じるボタン',
        });

        await userEvent.click(closeButton);

        await expect(args.setIsOpen).toHaveBeenCalledWith(false);
    },
};

export const CloseByOverlay = {
    args: {
        setIsOpen: fn(),
    },
    play: async ({ canvasElement, args }) => {
        const overlay = canvasElement.querySelector('[class*="modalOverlay"]');

        await expect(overlay).toBeInTheDocument();

        await userEvent.click(overlay);

        await expect(args.setIsOpen).toHaveBeenCalledWith(false);
    },
};

export const ClickModalContent = {
    args: {
        setIsOpen: fn(),
    },
    play: async ({ canvasElement, args }) => {
        const modalContent = canvasElement.querySelector('[class*="modalContent"]');

        await expect(modalContent).toBeInTheDocument();

        await userEvent.click(modalContent);

        await expect(args.setIsOpen).not.toHaveBeenCalled();
    },
};