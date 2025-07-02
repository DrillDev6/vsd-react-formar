import React from 'react';
import { Layout } from '../layout';

function Profile() {
  const [hovered, setHovered] = React.useState(false);

  return (
    <Layout title={''}>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
      
      <div style={styles.containerWrapper}>
        <div style={styles.container}>
          <div style={styles.avatarSection}>
            <img 
              style={styles.avatar as React.CSSProperties} 
              src='https://avatars.githubusercontent.com/u/200944264?s=400&u=1171e7d95c9441537eed837cb82ec8a4fa6cbe11&v=4' 
              alt="Profile" 
            />
          </div>
          
          <div style={styles.descriptionSection}>
            <h2 style={styles.title}>Full Stack Developer</h2>
            <p style={styles.text}>
              I'm passionate about turning ideas into code to solve problems | 
              Check out some projects below that demonstrate what I can do and my evolution journey
            </p>
          </div>
          
          <a
            href='https://github.com/DrillDev6?tab=repositories'
            style={{
              ...styles.buttonLink,
              transform: hovered ? 'scale(1.03)' : 'scale(1)',
              boxShadow: hovered ? '0 6px 16px rgba(255, 0, 255, 0.4)' : '0 4px 12px rgba(0, 0, 0, 0.25)'
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img 
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png" 
              alt="GitHub" 
              style={styles.buttonIcon}
            />
            <span style={styles.buttonText}>My Portfolio</span>
          </a>
        </div>
      </div>
    </Layout>
  );
}

const styles = {
  containerWrapper: {
    padding: '4px',
    borderRadius: '30px',
    background: 'linear-gradient(270deg,rgb(153, 28, 197),rgb(112, 35, 188),rgb(133, 72, 142))',
    backgroundSize: '600% 600%',
    animation: 'gradientAnimation 10s ease infinite',
    display: 'inline-block'
  },
  container: {
    display: 'flex',
    flex: 1,
    maxWidth: '600px',
    flexDirection: 'column' as const,
    padding: '50px',
    gap: '25px',
    alignItems: 'flex-start',
    borderRadius: '25px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    fontFamily: "'Poppins', sans-serif"
  },
  avatarSection: {
    flex: '0 0 200px',
    display: 'flex',
    justifyContent: 'center'
  },
  avatar: {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    boxShadow: '0 4px rgba(255, 255, 255, 0.2)',
    objectFit: 'cover'
  },
  title: {
    background: 'linear-gradient(to right, rgb(255, 255, 255), rgb(74, 67, 67))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontSize: '1.8rem',
    fontWeight: 600,
    margin: 0,
    textAlign: 'left' as const,
    fontFamily: "'Poppins', sans-serif"
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: '1.1rem',
    margin: 0,
    textAlign: 'left' as const,
    fontFamily: "'Poppins', sans-serif",
    lineHeight: 1.6
  },
  descriptionSection: {
    margin: 0,
    textAlign: 'left' as const
  },
  buttonLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '14px 24px',
    background: 'linear-gradient(135deg, rgb(112, 35, 188), #e100ff)',
    color: '#ffffff',
    fontWeight: 600,
    fontSize: '1.1rem',
    border: 'none',
    borderRadius: '10px',
    marginTop: '10px',
    transition: 'all 0.2s ease-in-out',
    cursor: 'pointer',
    textDecoration: 'none',
    fontFamily: "'Poppins', sans-serif"
  },
  buttonIcon: {
    width: '20px',
    height: '20px',
    filter: 'brightness(0) invert(1)'
  },
  buttonText: {
    backgroundImage: 'none',
    WebkitTextFillColor: '#ffffff'
  }
};

export { Profile };