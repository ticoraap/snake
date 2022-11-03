import React from 'react';
import { Modal } from './modal/Modal';
import SettingsProvider from './snakeboard/domain/settingsStore';

import { SnakeGame } from './snakeboard/ui/SnakeGame';

function App() {
    return (
        <SettingsProvider>
            <SnakeGame />
            <Modal>
                <h1>I'm a snake</h1>
                <h2>Game configuration</h2>
            </Modal>
        </SettingsProvider>
    );
}

export default App;
