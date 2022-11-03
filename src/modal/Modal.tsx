import React, { ReactNode } from "react";
import ReactDOM from "react-dom";

import styled from "@emotion/styled";
import { Backdrop } from "./Backdrop";

import { createModalViewModel } from "./ModalViewModel";
import { ZIndex } from "./ZIndex";
import { useSettingsStore } from "../snakeboard/domain/settingsStore";

export interface IModalProps {
    children?: ReactNode;
}

export function Modal({ children }: IModalProps) {

    const [isModalVisible, setModalVisible] = useSettingsStore().modal

    const viewModel = createModalViewModel({isModalVisible, setModalVisible})

    return ReactDOM.createPortal(
        <>
            <Backdrop viewModel={viewModel.backdropViewModel} />
            <StyledModal aria-label="Modal" isVisible={viewModel.isModalVisible}>
                {children}
            </StyledModal>
        </>,
        document.getElementById('modal-root')!
    )
}

const StyledModal = styled.div<{ isVisible: boolean }>`
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: ${ZIndex.modal};
    background-color: white;
    width: 50%;
    padding: 16px;
    transition: opacity 0.3s ease-out;
    border-radius: 3px;
    transform: translate(-50%, -50%);
    opacity: 0;
    pointer-events: none;

    ${(props) => props.isVisible && `opacity: 1; pointer-events: initial;`}

`;
