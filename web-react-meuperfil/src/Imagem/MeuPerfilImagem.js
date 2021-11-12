import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

class Imagem extends Component {
    render(){
        let imagem = "https://www.google.com/search?q=imagem+da+princesa+fiona&tbm=isch&chips=q:princesa+fiona,g_1:papel+de+parede:QwjHewbkehg%3D&client=opera&hs=Afc&hl=pt-BR&sa=X&ved=2ahUKEwjP4vnf94n0AhWhu5UCHY7UAx8Q4lYoAHoECAEQEQ&biw=1225&bih=658#imgrc=mC1yIX3APxqp1M"

        return(
            <Image src={imagem} fluid></Image>
        );
    }
}

export default Imagem;