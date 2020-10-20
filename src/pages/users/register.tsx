import { useState } from 'react'; 
import fire from '../../config/fire-config';
import { useRouter } from 'next/router';
import React from 'react'

import { ModelsWrapper, ModelSection } from '../../components/Model'
import DefaultOverlayContent from '../../components/DefaultOverlayContent'
import UniqueOverlay from '../../components/UniqueOverlay'

import { Container, Spacer, CenterDiv } from '../../components/Page/styles'

import Header from '../../components/Header';


const Register: React.FC  = () => {
  const router = useRouter();
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passConf, setPassConf] = useState('');
  const [notification, setNotification] = useState('');
  const handleLogin = (e) => {
    e.preventDefault();
    if (password !== passConf) {
      setNotification(
       'Password and password confirmation does not match'
      )
      setTimeout(() => {
        setNotification('')
      }, 2000)
      setPassword('');
      setPassConf('');
      return null;
      }
    fire.auth()
      .createUserWithEmailAndPassword(userName, password)
      .catch((err) => {
        console.log(err.code, err.message)
      });
    router.push("/")
  }
  return (
    <>
   
    <Container>

    <Header />

    <ModelsWrapper>
      <div>
        {[
          'Bem vindo a QueRy',
        ].map(modelName => (
          <ModelSection
            key={modelName}
            className="colored"
            modelName={modelName}
            overlayNode={
              <DefaultOverlayContent
                label={modelName}
                description="Faça seu cadastro e venha conhecer seu perfil"
              />
            } 
          >
          <CenterDiv>
              {notification}
            <form onSubmit={handleLogin}>
              Email: <input type="text" value={userName} 
              onChange={({target}) => setUsername(target.value)} /> 
              <br />
              Senha: <input type="password" value={password} 
              onChange={({target}) => setPassword(target.value)} /> 
              <br />
              Confirmar Senha: <input type="password" value={passConf}    
              onChange={({target}) => setPassConf(target.value)} /> 
              <br />
              <button type="submit">Cadastrar</button>
            </form>
          </CenterDiv>
          </ModelSection>
        ))}
      </div>
      

      <Spacer />
      <UniqueOverlay />

    </ModelsWrapper>
  </Container>
  </>
  )
}
export default Register
