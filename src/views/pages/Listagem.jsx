import React, {useState} from 'react';
import axios from 'axios';

export default function Listagem (){
    const [cep, setCep] = useState({cep: ''});
    const [informacoes, setInformacoes] = useState({
        cep: '',
        logradouro: '',
        complemento: '',
        bairro: '',
        localidade: '',
        uf: '', 
        ibge: '',
        gia: ''
    })
    // buscar as informações
    const getInformacoes = () => {
        axios.get('http://viacep.com.br/ws/' + cep + '/json/')
            .then(response =>{
                setInformacoes(response.data)
            })
    }

    // atualizar o cep
    const handlingCep = (e) => {
        setCep(e.target.value);
    }

    return(
        <>
        <h1>Consultando CEP</h1>
        <div>
            <input type='text'onChange={(e) => {handlingCep(e) }} placeholder='Digite o CEP' />
            <button onClick={getInformacoes}>Pesquisar</button>
        </div>
        <div>
            <ul>
                <li>CEP: {informacoes['cep']}</li>
                <li>Logradouro: {informacoes['logradouro']}</li>
                <li>Complemento: {informacoes['complemento']}</li>
                <li>Bairro: {informacoes['bairro']}</li>
                <li>Localidade: {informacoes['localidade']}</li>
                <li>Uf: {informacoes['uf']}</li>
                <li>Ibge: {informacoes['ibge']}</li>
                <li>Gia: {informacoes['gia']}</li>
            </ul>
        </div>
        </>
    )
}