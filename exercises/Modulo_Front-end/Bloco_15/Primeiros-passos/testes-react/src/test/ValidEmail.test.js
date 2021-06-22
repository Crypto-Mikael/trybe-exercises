import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from '../components/ValidEmail';


describe('Testando Component Valid-Email:', () => {
  it('Testando um componente, caso o email seja valido.', () => {
    const EMAIL_USER = 'email@email.com';
    const { getByText } = render(<ValidEmail email={EMAIL_USER} />);
    const isValid = getByText('Email Valido');
    expect(isValid).toBeInTheDocument();
  });
  
  it('Testando um componente, caso o email seja inválido.', () => {
    const EMAIL_USER = 'emailerrado';
    const { getByText } = render(<ValidEmail email={EMAIL_USER} />);
    const isValid = getByText('Email Inválido');
    expect(isValid).toBeInTheDocument();
  });

  it('Testando um componente, caso o email não seja digitado nenhuma mensagem deve ser escrita', () => {
    const EMAIL_USER = '';
    const { getByText } = render(<ValidEmail email={EMAIL_USER}/>);
    const LoginMensage = getByText('Email Inválido');
    expect(LoginMensage).not.toBeInTheDocument();
  });
})
