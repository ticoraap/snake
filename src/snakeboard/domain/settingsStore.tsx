import { createContext, ReactNode, useContext, useState } from "react";

type ISettingsContext = {
    modal: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
}

export const SettingsContext = createContext<ISettingsContext | undefined>(undefined);

export interface ISettingsProviderProps {
    children: ReactNode
}

type IStore = {
    modal: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
}

export default function SettingsProvider({ children }: ISettingsProviderProps) {
    const [isModalVisible, setModalVisible] = useState(true);

    const store: IStore = {
        modal: [isModalVisible, setModalVisible],
    };

    return (
        <SettingsContext.Provider value={store}>
            {children}
        </SettingsContext.Provider>
    )
}

export const useSettingsStore = () => {
    const settingsStore = useContext(SettingsContext);
    if (settingsStore === undefined) throw new Error("Expected settingsStore context value to be set")
    return settingsStore
};
