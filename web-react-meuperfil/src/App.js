import React from 'react';
import { Container, Row, Col, Accordion} from 'react-bootstrap';
import './App.css';
import Imagem from './Imagem/MeuPerfilImagem'
 
function App () {
    return (
      <Container>

        <Row className="justify-content-md-center">
          <Col>
          <center><h1>Perfil da Bia</h1></center>
          </Col>
        </Row>

        <Row className= "justify-content-md-center">
          <Col xs = {6} md = {4}>
            <Imagem />
          </Col>
        </Row>

        <br/>

        <Row>
          <Col>
          <Accordion>
            <Accordion.Item eventKey="0">
             <Accordion.Body>
               <p>Beatriz de Sousa Rodrigues Batista;</p>
               <p>20 Anos;</p>
               <p>Santos/SP;</p>
               <p>Brail</p>
             </Accordion.Body>
            </Accordion.Item>
        <Accordion.Item eventKey="1">
        <Accordion.Header>Formações</Accordion.Header>
          <Accordion.Body>
            <p>Ensino Médio Completo</p>
            <p>Atualmente Cursando Ciência da Computação</p>
          </Accordion.Body>
        </Accordion.Item>
              <Accordion.Item eventKey="2">
              <Accordion.Header>Experiências</Accordion.Header>
                <Accordion.Body>
                  <p>Estágio no período do Ensino Médio na Defensoria Pública da União - 2017 à 2019</p>
                  <p>Atualmente Terceirizada na Defensoria Pública da União em Santos</p>
                  </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
              <Accordion.Header>Projetos</Accordion.Header>
                <Accordion.Body>
                  <p>Criptografia com Python</p>
                  <p>Site do MobilidadeTech</p>
                  <p>Algoritmo de Leitura de Dados em planilha Excel</p>
                  <p>Diversos Aplicativos desenvolvidos através do APP INVENTOR</p>
                </Accordion.Body>
                </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
  );
}
export default App;