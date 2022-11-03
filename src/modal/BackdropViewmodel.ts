export type IBackdropViewModel = ReturnType<typeof createBackdropViewModel>;

export interface IBackdropViewModelProps {
    isVisible: boolean;
    onHideModal: () => void;
}

export function createBackdropViewModel({
    isVisible,
    onHideModal,
}: IBackdropViewModelProps) {
    return {
        isBackdropVisible: isVisible,
        onBackdropClick: onHideModal,
    };
}
