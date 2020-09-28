import React from 'react';
import './index.css';

export default function Consultar() {
    return(
        <div className = "Consult">

            <h2 className = "titulo1">PROJECTCARS</h2>

            <ul id = "barra_pesquisa" class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link" href="#">Menu</a>
  </li>
  <li class="nav-item">
    <a class="nav-link active" href="#">Consultar</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Cadastrar</a>
  </li>
    <li class="nav-item">
      <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Agendamentos</a>
    </li>
  </ul>

    <h1 className = "titulo2">Consultar</h1>
    <button type="button" class="btn btn-info">Consulte aqui</button>


        </div>
    )
}