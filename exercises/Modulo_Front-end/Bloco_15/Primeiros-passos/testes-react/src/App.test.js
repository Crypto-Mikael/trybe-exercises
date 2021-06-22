import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('Tela de inserção do email:', () => {
  it('Verifica se existe um campo de Email', () => {
    // Acessar elementos na tela
    const { getByLabelText } = render(<App />);
    const inputEmail = getByLabelText('Email');
  
    // Fazer seus testes
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail.type).toBe('email');
  })
  
  it('Verifica que há dois botões', () => {
    //Acessar elementos na tela
    const { getAllByRole } = render(<App />);
    const button = getAllByRole('button');
  
    // Fazer seus testes
    expect(button.length).toBe(2);
  })
  
  it('Verifica que há um botão \'Enviar\'', () => {
    //Acessar elementos na tela
    const { getByTestId } = render(<App />);
    const button = getByTestId('id-send');
  
    // Fazer seus testes
    expect(button).toBeInTheDocument();
    expect(button).toHaveValue('Enviar');
  })

  it('Verificar que, após clickar no botão enviar o elemento seja atualizado com email', () => {
    const { getByTestId, getByLabelText } = render(<App />);
    const EMAIL_USER = 'micael@teste.com'
    // Acessar elementos na tela
    const emailInput = getByLabelText('Email');
    const sendButton = getByTestId('id-send');
    const userEmail = getByTestId('id-email-user');

    // Interagir com eles (se houver necessidade)
    fireEvent.change(emailInput, { target: { value: EMAIL_USER } });
    fireEvent.click(sendButton);

    //Fazer seus testes
    expect(emailInput.value).toBe('');
    expect(userEmail.textContent).toBe(`Value: ${ EMAIL_USER }`);
  })
})


