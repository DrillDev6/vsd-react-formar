import React from 'react'

const Layout = ({ children, title }) => {
    return (
        <div style={styles.wrapper}>
            <style>
                {`
                    @keyframes gradientBG {
                        0% { background-position: 0% 50%; }
                        50% { background-position: 100% 50%; }
                        100% { background-position: 0% 50%; }
                    }
                `}
            </style>
            <h1>{title}</h1>
            {children}
        </div>
    )
}

const styles = {
    wrapper: {
        flex: 1,
        background: 'linear-gradient(135deg,rgb(170, 5, 247),rgba(91, 11, 107, 0.81),rgb(133, 62, 174))',
        animation: 'gradientBG 15s ease infinite',
        backgroundSize: '400% 400%',
        minHeight: '100vh',
        padding: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}

export { Layout }
