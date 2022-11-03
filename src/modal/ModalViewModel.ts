import { createBackdropViewModel } from "./BackdropViewmodel";
import { Dispatch, SetStateAction } from "react";

export type IModalViewModel = ReturnType<typeof createModalViewModel>;

export interface ICartModalContentViewModelProps {
    isModalVisible: boolean;
    setModalVisible: Dispatch<SetStateAction<boolean>>;
}

export function createModalViewModel({
    isModalVisible,
    setModalVisible,
}: ICartModalContentViewModelProps) {
    return {
        isModalVisible: isModalVisible,
        onHideModal: () => setModalVisible(false),
        backdropViewModel: createBackdropViewModel({
            isVisible: isModalVisible,
            onHideModal: () => setModalVisible(false),
        }),
    };
}
