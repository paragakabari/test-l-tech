import React from 'react';

type ButtonCompProps = {
    onClick?: () => void;
    text: string;
    className?: string;
    disable?: boolean;
};

const ButtonComp: React.FC<ButtonCompProps> = ({ onClick, text, className, disable = false }) => {
    return (
        <button onClick={onClick} style={styles.button} className={className} disabled={disable}>
            {text}
        </button>
    );
};

const styles = {
    button: {
        backgroundColor: '#FF6C5C',
        color: '#FFFFFF',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '20px',
        fontSize: '15px',
        fontWeight: 500,
        cursor: 'pointer',
    } as React.CSSProperties,
};

export default ButtonComp;
