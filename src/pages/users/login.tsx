import { useState } from 'react';
import fire from '../../config/fire-config';
import { useRouter } from 'next/router'

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [notify, setNotification] = useState('');
//   const router = useRouter();
//   const handleLogin = (e) => {
//     e.preventDefault();
//     fire.auth()
//       .signInWithEmailAndPassword(username, password)
//       .catch((err) => {
//         console.log(err.code, err.message)
//         setNotification(err.message)
//         setTimeout(() => {
//           setNotification('')
//         }, 2000)
//       })
//     setUsername('')
//     setPassword('')
//     router.push("/")
//   }
//   return (
//     <div>
//       <h1>Login</h1>
//       {notify}
//       <form onSubmit={handleLogin}>
//         Email<input type="text" value={username} 
//         onChange= {({target}) => setUsername(target.value)} />
//         <br />
//         Password<input type="password" value={password} 
//         onChange={({target}) => setPassword(target.value)} />
//         <br />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   )
// }
// export default Login



import React from 'react'

import { ModelsWrapper, ModelSection } from '../../components/Model'
import DefaultOverlayContent from '../../components/DefaultOverlayContent'
import UniqueOverlay from '../../components/UniqueOverlay'
import { Container, Spacer, CenterDiv } from '../../components/Page/styles'

import Header from '../../components/Header';


const Page: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [notify, setNotification] = useState('');
  const router = useRouter();
  const user = fire.auth().currentUser;

  const handleLogin = (e) => {
    
    e.preventDefault();
    fire.auth()
      .signInWithEmailAndPassword(username, password)
      .catch((err) => {
        console.log(err.code, err.message)
        setNotification(err.message)
        setTimeout(() => {
          setNotification('')
        }, 2000)
      })

    setUsername('')
    setPassword('')
    router.push(`/profile/${user.uid}`)
  }

  async function getCustomClaimRole() {
    await fire.auth().currentUser.getIdToken(true);
    const decodedToken = await fire.auth().currentUser.getIdTokenResult();
    return decodedToken.claims.stripeRole;
  }


  return (
    <Container>

      <Header />

      <ModelsWrapper>
        <div>
          {[
            'Bem vindo de volta!',
          ].map(modelName => (
            <ModelSection
              key={modelName}
              className="colored"
              modelName={modelName}
              overlayNode={
                <DefaultOverlayContent
                  label={modelName}
                  description="É bom te ver de novo"
                />
              }
            >
              <CenterDiv>
            <form onSubmit={handleLogin}>
              Email: <input type="text" value={username} 
              onChange={({target}) => setUsername(target.value)} /> 
              <br />
              Senha: <input type="password" value={password} 
              onChange={({target}) => setPassword(target.value)} /> 
              <br />
              <button type="submit">Login</button>
            </form>

            <div id="firebaseui-auth-container"></div>
            <div id="loader">Loading...</div>
          </CenterDiv>
            </ModelSection>
          ))}
        </div>

        <Spacer />
        <UniqueOverlay />

      </ModelsWrapper>
    </Container>
  )
}

export default Page
