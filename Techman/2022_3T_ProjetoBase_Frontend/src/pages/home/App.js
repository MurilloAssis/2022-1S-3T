// import { useState, useEffect } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';

import "../../assets/css/flexbox.css"
import "../../assets/css/reset.css"
import "../../assets/css/style.css"

import logo from '../../assets/img/logo.png'
import Rodape from "../../components/rodape/rodape";

function App() {
  // const [ listaEventos, setListaEventos ] = useState( [] );
  // let history = useHistory();

  // function buscarEventos(){
  //   axios('http://localhost:5000/api/Eventos')
  //   .then(resposta => {
  //     if (resposta.status === 200) {
  //       console.log('Os eventos foram atualizados');
  //       setListaEventos( resposta.data );
  //       // console.log(history);
  //     }
  //   })
  //   .catch(erro => console.log(erro));
  // };

  // useEffect( buscarEventos, [] );

  // function inscrever(evento){
  //   console.log(evento);

  //   axios.post('http://localhost:5000/api/presencas/inscricao/' + evento.idEvento, {}, {
  //       headers : {
  //           'Authorization' : 'Bearer ' + localStorage.getItem('usuario-login')
  //       }
  //   })
  //   .then(resposta => {
  //     if (resposta.status === 201) {
  //       console.log('Inscrição realizada com sucesso!');
  //       history.push("/meusEventos");
  //     }
  //   })
  //   // .catch(erro => console.log(erro));
  //   .catch(erro => {
  //     // console.log(erro.toJSON());
  //     if (erro.toJSON().status === 401) {
  //       history.push("/login");
  //     }
  //   });
  // };

  return (
    <div>
      <header className="cabecalhoPrincipal">
        <div className="container">
        <Link to="/"> <img src={logo} alt="Logo da Patrimonio" /> </Link>

          <nav className="cabecalhoPrincipal-nav">
            <Link to="/">Home</Link>
            <Link className="cabecalhoPrincipal-nav-login" to="/login">Login</Link>
          </nav>
        </div>
      </header>

      <section className="conteudoImagem">
        <div>
          <h1>Patrimônio</h1>
          <h2>Área para controle de patrimônio.</h2>
        </div>
      </section>

      <main className="conteudoPrincipal">
        {/*<section id="conteudoPrincipal-eventos">*/}
        {/*  <h1 id="conteudoPrincipal-eventos-titulo">Próximos Eventos</h1>*/}
        {/*  <div className="container">*/}
        {/*    <nav>*/}
        {/*      <ul className="conteudoPrincipal-dados">*/}

        {/*        {*/}
        {/*          listaEventos.map( (evento) => {*/}
        {/*            return(*/}
        {/*              <li key={evento.idEvento} className="conteudoPrincipal-dados-link eventos">*/}
        {/*                <h2>{evento.nomeEvento}</h2>*/}
        {/*                <p>{evento.descricao}</p>*/}
        {/*                <p>{ Intl.DateTimeFormat("pt-BR", {*/}
        {/*                        year: 'numeric', month: 'numeric', day: 'numeric',*/}
        {/*                        hour: 'numeric', minute: 'numeric',*/}
        {/*                        hour12: true                                                */}
        {/*                    }).format(new Date(evento.dataEvento)) }</p>*/}
        {/*                <button onClick={ () => inscrever(evento) }>me inscrever</button>*/}
        {/*              </li>*/}
        {/*            )*/}
        {/*          } )*/}
        {/*        }*/}

        {/*      </ul>*/}
        {/*    </nav>*/}
        {/*  </div>*/}
        {/*</section>*/}

        <section id="conteudoPrincipal-visao">
          <h1 id="conteudoPrincipal-visao-titulo">Nosso serviço</h1>
          <div className="container">
            <p className="visao-texto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
              Nullam auctor suscipit eros sed blandit. <br />
              Fusce euismod neque sed dapibus sollicitudin. <br />Duis vel lacus
              vestibulum, molestie dui eu, bibendum nunc.
            </p>
          </div>
        </section>

        {/*<section id="conteudoPrincipal-contato">*/}
        {/*  <h1 id="conteudoPrincipal-contato-titulo">Contato</h1>*/}
        {/*  <div*/}
        {/*    className="container conteudo-contato-titulo"*/}
        {/*  >*/}
        {/*    <div*/}
        {/*      className="contato-mapa conteudo-contato-mapa"*/}
        {/*    ></div>*/}
        {/*    <div*/}
        {/*      className="contato-endereco conteudo-contato-endereco"*/}
        {/*    >*/}
        {/*      Alameda Barão de Limeira, 539 <br />*/}
        {/*      São Paulo - SP*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</section>*/}
      </main>

        <Rodape />

  </div>

  );
}

export default App;
