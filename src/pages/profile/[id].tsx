import React, { useState } from 'react';
import fire, { storage }  from '../../config/fire-config';
import Link from 'next/link'
import { Container, Content, AvatarInput } from '../../components/styles/stylesID'
import { FiCamera, FiArrowLeft } from 'react-icons/fi';
import Button from '../../components/ButtonLink'

interface IData {
  face: string;
  ocupacao: string;
  twitter: string;
  insta: string;
  avatar: string;
  url: string;
}

const Blog = (props) => {

    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);
  
    const handleChange = e => {
      if (e.target.files[0]) {
        setImage(e.target.files[0]);
      }
    };
  
    const handleUpload = () => {
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        snapshot => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        error => {
          console.log(error);
        },
        () => {
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then(url => {
              setUrl(url);
              console.log(url)
            });
        }
      );
    };
 
  return (
          <>
      <Container>
      <header>
        <div>
          <Link href="/">
            <FiArrowLeft />
          </Link>
        </div>
      </header>

      <Content>
          <AvatarInput>
          <img src={props.url || "data:image/png;base64,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"} alt="firebase-image" />
            <label htmlFor="avatar">
              <FiCamera />
            </label>
          </AvatarInput>
          <h1>Nome SobreNome</h1>
          <progress value={progress} max="100" />
          <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
          <h2>Little Bio<br />{props.ocupacao}</h2>

        { props.face &&
          <Button><Link href="https://facebook.com/">{props.face}</Link></Button>
          }

        { props.insta &&
          <Button><Link href={`https://instagram.com/${props.insta}`}>{props.insta}</Link></Button>
          }

          { props.twitter &&  
          <Button><Link href={`https://twitter.com/${props.twitter}`}>{props.twitter}</Link></Button>
             } 

          </Content>
        </Container>
      </>
  )
}

export const getServerSideProps = async ({ query, evt }) => {
  const content: IData = {face: "string",insta: "string",ocupacao: "string",twitter: "string", avatar: "string", url: "string"};

  await fire.firestore()
    .collection('users')
    .doc(query.id)
    .get()
    .then((result) => {
      try{
    content['face'] = result.data().face;
      content['insta'] = result.data().insta;
      content['ocupacao'] = result.data().ocupacao; 
      content['twitter'] = result.data().twitter;
       content['url'] = result.data().url;
      }catch(err){
        console.log(err);
      }
    });

  return {
    props: {
      face: content.face,
      insta: content.insta,
      ocupacao: content.ocupacao,
      twitter: content.twitter,
      url: content.url,
    }
  }
}
export default Blog