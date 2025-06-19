import React from 'react'
import { Layout } from '../layout'


function Home() {
    return (
        <Layout title={'Dashboard'}>
                <div style={styles.containerWrapper}>
                    <div style={styles.container}>
                        <h1>Helle there, I'm Adriel Hipolito</h1>
                        <h2 style={styles.subTitle}>Developer FullStack on the rise</h2>
                        <p style={styles.text}> Welcome to my portfolio!
                            Here you will find all my recent projects
                            and my professional journey!
                        </p>
                        <button style={styles.button}>
                            Explore Portfolio
                        </button>
                        <div style={styles.socialContainer}>
                            <a href='' style={styles.socialLink}>
                                <img src="" alt="linkedin" style={styles.socialIcon}/>
                            </a>
                        </div>
                    </div>
                </div>
        </Layout>
    )
}

const styles = {
    containerWrapper: {
        padding: '4px',
        borderRadius: '30px',
        background: 'linear-gradient(270deg, #7f00ff, #e100ff, #7f00ff)',
        backgroundSize: '600% 600%',
        animation: 'gradientAnimation 10s ease inifinite',
        display: 'inline-block'
    },
    container:{
        display: 'flex',
        flex:1,
        maxWidth: '600px',
        flexDirection: 'column' as 'column',
        padding: '50px',
        gap: '25px',
        borderRadius: '25px',
        backgroundColor: 'rgb(0, 0, 2)'
    },
    title: {
        color: '#fff',
        fontSize: '2.5rem',
        fontWeight: 700,
        margin: 0,
        background: 'linear-gradient(135deg, rgb(255, 255, 255), #e100ff',
        webkitBackgroundClip: 'text',
        webkiTextFillColor: 'transparent',
        textAlign: 'left',

    },
    subTitle: {
        color: 'rgba(255, 255, 255, 3)',
        fontSize: '1.3rem',
        fontWeight: 400,
        margin: 0,
        textAlign: 'left' as any
    },
    text: {
        color: 'rgba(255, 255, 255, 3)',
        fontSize: '1.3rem',
        fontWeight: 400,
        margin: 0,
        textAlign: 'left' as any
    },
    button: {
        padding: '14px 24px',
        background: 'linear-gradient(135deg, rgb(180, 66, 168),rgb(69, 48, 72)',
        color: 'rgb(255, 255, 255)',
        fontWeight: 600,
        fontSize: '1.1rem',
        border: 'none',
        borderRadius: '10px',
        marginTop: '10',
        boxShadow: '0 4px 12px rgb(0, 0, 3)',


    },
    socialContainer: {

    },
    socialLink: {

    },
    socialIcon: {

    }

}
export {Home}