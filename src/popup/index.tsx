import React from 'react';
import ReactDOM from 'react-dom/client';
import Popup from './Popup';

const Index = () => <Popup />;

const root = ReactDOM.createRoot(document.getElementById('display-container')!);
                                 class Background {
    _port: number;
    constructor() {
        this.init();
    }

    sendMessage = async (tab: Tabs.Tab, msg: EXTMessage) => {
        try {
            const res = await tabs.sendMessage(tab.id ?? 0, msg);
            return res;
        } catch (error) {
            console.log(`[===== Error in sendMessage =====]`, error);
            return null;
        }
    };
}
class Background {
    _port: number;
    constructor() {
        this.init();
    }
root.render(<Index />);
