import React from 'react';

const verifyEmail = (email) => {
  console.log(email)
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
};


const ValidEmail = (props) => {
  const { email } = props;

  return (
    <div>
      <h2 data-testid="id-email-user">{`Value: ${email}`}</h2>
      { email ? (<h3 data-testid="id-email-verify"> {(verifyEmail(email) ? 'Email Valido' : 'Email Inválido')} </h3>) : null }
    </div>
  );
};
export default ValidEmail;