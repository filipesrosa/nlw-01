import React from 'react';

// Atributos da tag
interface HeaderProps {
  title: string
}

// Componente com atributos
const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  );
}

// Retornar um componente sem atributos
/*
function Header() {
  return (
    <header>
      <h1>Ecoleta</h1>
    </header>
  );
}
*/

export default Header;