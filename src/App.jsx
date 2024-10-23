import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const products = [
  {
    id: 1,
    title: 'Cerura',
    price: 'R$ 23.305,90',
    image: 'https://s2-techtudo.glbimg.com/6AkJAf61Ocug01pj8QEJKOBB4zo=/0x0:696x436/984x0/smart/filters:strip_icc()/s.glbimg.com/po/tt2/f/original/2016/10/10/celular_da_xuxa.jpg',
  },
  {
    id: 2,
    title: 'Letitop',
    price: 'R$ 4903,50',
    image: 'https://candide.vtexassets.com/arquivos/ids/1373983-800-800?v=638586786181630000&width=800&height=800&aspect=true',
  },
  {
    id: 3,
    title: 'Foni di zuvidu',
    price: 'R$ 9.574,67',
    image: 'https://photos.enjoei.com.br/cd-player-karaoke-da-xuxa/1200xN/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy84MzE3NDkxLzk1YjM0ZjdkOGMyYmFiNDNjNTc1ZTA5NjIyYmVjM2MyLmpwZw',
  },
];


function App() {
  return (
    <div>
      <h1>Lista de Produtos</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ddd', padding: '10px', width: '200px' }}>
            <img src={product.image} alt={product.title} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
            <h2>{product.title}</h2>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
