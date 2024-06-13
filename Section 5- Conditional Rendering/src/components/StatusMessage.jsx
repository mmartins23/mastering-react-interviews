import { useState } from 'react';

const StatusMessage = () => {
    const [status, setStatus] = useState('idle');

    const renderMessage = () => {
        switch (status) {
            case 'idle':
                return <p>Status: Idle</p>;
            case 'loading':
                return <p>Status: Loading...</p>;
            case 'success':
                return <p>Status: Success!</p>;
            case 'error':
                return <p>Status: Error occurred!</p>;
            default:
                return <p>Status: Unknown</p>;
        }
    };

    return (
        <div>
            {renderMessage()}
            <button onClick={() => setStatus('idle')}>Set Idle</button>
            <button onClick={() => setStatus('loading')}>Set Loading</button>
            <button onClick={() => setStatus('success')}>Set Success</button>
            <button onClick={() => setStatus('error')}>Set Error</button>
        </div>
    );
};

export default StatusMessage;
