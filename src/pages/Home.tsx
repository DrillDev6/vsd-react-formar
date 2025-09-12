import React, { useState } from 'react'
import { Layout } from '../layout'
import { useNavigate } from 'react-router-dom'




function Home() {
  const navigate = useNavigate()
    const [hovered, setHovered] = useState(false)
    return (
        <Layout title={''}>
                <div style={styles.containerWrapper}>
                    <div style={styles.container}>
                        <h1 style={styles.title}>Adriel Hipolito</h1>
                        <br/>
                        <h2 style={styles.subTitle}>
                          Hello there, I'm Adriel Hipolito
                          Developer FullStack on the rise</h2>  

                        <p style={styles.text}> Welcome to my portfolio!
                            Here you will find all my recent projects
                            and my professional journey!
                        </p>
                        <button
                            style={{
                              ...styles.button,
                              transform: hovered
                                ? 'scale(1.03)'
                                : 'scale(1)',
                              boxShadow: hovered
                                ? '0 6px 16px rgba(255, 0, 255, 0.4)'
                                : '0 4px 12px rgba(133, 70, 70, 0.25)'
                            }}
                            onClick={() => navigate( window.location.href = '/profile') }
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                        >
                Explorar Portfólio
              </button>
              <div style={styles.socialContainer}>
                <a href="https://github.com/adrielhs" style={styles.socialLink}>
                  <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github"  style={styles.socialIcon}/>
                </a>

                <a href="https://www.linkedin.com/in/adrielhipolito/" style={styles.socialLink}>
                  <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="linkedin" style={styles.socialIcon}/>
                            </a>

                  <a href='https://www.instagram.com/fx_adrielhipolit0/?next=%2F' style={styles.socialLink}>
                    <img src="https://cdn-icons-png.flaticon.com/128/87/87390.png"
                    alt="instagram" style={styles.socialIcon}/>
                  
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
    background: 'linear-gradient(270deg,rgb(153, 28, 198),rgb(112, 35, 188),rgb(133, 72, 142))',
    backgroundSize: '600% 600%',
    animation:'gradientAnimation 10s ease infinite',
    display: 'inline-block'
  },
  container: {
    display: 'flex',
    flex: 1,
    maxWidth: '600px',
    flexDirection: 'column' as 'column',
    padding: '50px',
    gap: '25px',
    alignItems: "flex-start",
    borderRadius: '25px',
    backgroundColor: 'rgba(64, 34, 34, 0.1)'
  },
  title: {
    color: '#fff',
    fontSize: '2.5rem',
    fontWeight: 700,
    margin:0,
    background: 'linear-gradient(135deg, #fff,rgb(244, 244, 244), rgb(119, 126, 126))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor:'transparent',
    textAlign: 'left'
  },
  subTitle: {
    background: 'linear-gradient(to right,rgb(255, 255, 255),rgb(238, 238, 238))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontSize:'1.6rem',
    fontWeight:400,
    margin:0,
    textAlign: 'left' as const
  },
  text: {
    color: 'rgba(255, 255,  255, 0.8)',
    fontSize: '1.4rem',
    margin: '0',
    textAlign: 'left' as const
  },
  button: {
     padding: '14px 24px',
    background: 'linear-gradient(135deg, rgb(112, 35, 188),rgb(133, 72, 142))',
    color: '#ffffff',
    fontWeight: 600,
    fontSize: '1.1rem',
    border: 'none',
    borderRadius: '10px',
    marginTop: '10px',
    transition: 'all 0.2s ease-in-out',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)',
    cursor: 'pointer',
    backgroundImage: 'none !important',
    WebkitTextFillColor: '#ffffff !important',
    display: 'inline-block',
  },
  socialContainer: {
    display: 'flex',
    gap: '20px',
    marginTop:'20px'
  },
  socialLink: {
    transition: 'transform 0.2s'
  },
  socialIcon: {
    width: '32px',
    height: '32',
    filter: 'brightness(0) invert(1)'
  }
}


export { Home }
