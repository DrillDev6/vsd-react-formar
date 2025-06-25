import React from 'react'
import { Layout } from '../layout'

function Profile(){
    return(
        <Layout title={''}>
        
            <div style={styles.containerWrapper}>
                <div style={styles.container}>
                    <div style={styles.avatarSection}>
                        <img style={styles.avatar} src='./images/imagem.jpg'></img>
                    </div>
                    <div style={styles.descriptionSection}>
                        <h2>Desenvolvedor Full Stack</h2>
                        <p style={styles.text}>
                            Tenho paixão em executar ideais em código para solucionar problemas |
                            Confira abaixo alguns projetos que demonstram um pouco do que eu posso fazer e minha trajetória de evolução
                        </p>
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
    background:'linear-gradient(270deg,#7f00ff, #e100ff, #7f00ff)',
    backgroundSize: '600% 600%',
    animation:'gradientAnimation 10s ease infinite',
    display: 'inline-block'
  },
  container: {
    display: 'flex',
    flex: 1,
    maxWidth: '600px',
    flexDirection: 'column' as const,
    padding: '50px',
    gap: '25px',
    alignItems: "flex-start",
    borderRadius: '25px',
    backgroundColor: '#000000cc'
  },
  avatarSection: {
    flex: '0 0 200px',
    display: 'flex',
    justifyContent: 'center'
  },
  avatar:{
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    boxShadow: '0 4px rgba(255, 255, 255, 0.2)'
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: '1.1rem',
    margin: 0,
    textAlign: 'left' as const
  },
  descriptionSection:{
    flex: 1,
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '18px'
  },

}
export {Profile}