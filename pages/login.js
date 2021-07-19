import React from 'react';
import { useRouter } from 'next/router';
import Box from '../src/components/Box/index';
import nookies from 'nookies';

export default function LoginScreen() {
  const router = useRouter()
  const [githubUser, setGithubUser] = React.useState('patrooooo');

  return (
    <main style={{ display: 'flex', 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center' }}>

      <div className="loginScreen">
        <Box>
        <section className="logoArea">
          <img className="title"  src="https://alurakut.vercel.app/logo.svg" />
        <Box>
          <p className="desc"><strong>😉 Conecte-se</strong> aos seus amigos e familiares usando recados e mensagens instantâneas</p>
          <p className="desc"><strong>🧐 Conheça</strong> novas pessoas através de amigos de seus amigos e comunidades</p>
          <p className="desc"><strong>🤝 Compartilhe</strong> seus vídeos, fotos e paixões em um só lugar</p>
        </Box> 
        </section>
        <hr/>
        <section className="formArea">
          <form className="box" action="/" onSubmit={ (infsDoEvent) => {
            infsDoEvent.preventDefault();

            fetch('https://alurakut.vercel.app/api/login', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json' 
                },
                body: JSON.stringify({ githubUser: githubUser})
            })
            .then(async (respostaDoServer) => {
              const dadosReposta = await respostaDoServer.json()
              const token =  dadosReposta.token
              nookies.set(null, 'USER_TOKEN', token, {
                path: '/',
                maxAge: 86400 * 7,
              })
              router.push('/')
            })
          }} >
            <p> 
              Acesse agora mesmo com seu usuário do <strong>GitHub</strong>!
          </p>
            <input 
            placeholder="Usuário" 
            value={githubUser}
            onChange={(evento) => {
              setGithubUser(evento.target.value)
            }}
             />
            <button className="button" type="submit" >
              Login
          </button>
          </form>
      <Box>
          <footer className="box">
            <p>
              Ainda não é membro? <br />
              <a href="/login">
                <strong>
                  ENTRAR JÁ
              </strong>
              </a>
            </p>
          </footer>
          </Box>
        </section>

        <footer className="footerArea">
          <p>
            © 2021 alura.com.br - <a href="/">Sobre o Orkut.br</a> - <a href="/">Centro de segurança</a> - <a href="/">Privacidade</a> - <a href="/">Termos</a> - <a href="/">Contato</a>
          </p>
        </footer>
        </Box>
      </div>
    </main>
  )
} 