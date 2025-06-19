import React from 'react'

const Layout = ({children, title}) => {
    return  (
        <div style={styeles.wrapper}>
            <style>
                {
                    `
                    @keyframes gradientBG {
                    0%{background-position: 0% 50%;}
                    50%{background-position: 100% 50%;}
                    100%{background-position: 0% 50%;}
                    }

                    `
                }
            </style>
            <div style={styeles.container}>
                <h1>{title}</h1>
                {children}
            </div>
        </div>
    )
}

const styeles = {
    wrapper: {
        flex: 1,
        background: 'linear-gradient(135deg, #6a1b9a, #000000, #9e9e9e)',
        animation: 'gradientBG  15s ease inifinite',
        backgroundSize: '400% 400%',
        minHeight: '100vh',
        padding: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        maxWidth: '600px',
        width: '100%',
        background: 'purple'
    }
}

export { Layout }
