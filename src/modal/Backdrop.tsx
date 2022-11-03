import styled from "@emotion/styled";
import { IBackdropViewModel } from "./BackdropViewmodel";
import { ZIndex } from "./ZIndex";

export interface IBackdropProps {
    viewModel: IBackdropViewModel
}

export function Backdrop({viewModel}: IBackdropProps) {
    return (
        <StyledBackdrop
            aria-label="Backdrop"
            isVisible={viewModel.isBackdropVisible}
            onClick={viewModel.onBackdropClick}
        />
    );
}

const StyledBackdrop = styled.div<{ isVisible: boolean }>`
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: ${ZIndex.modalBackdrop};
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease-out;
    cursor: pointer;

    ${(props) => props.isVisible && `opacity: 1; pointer-events: initial;`}
`;
