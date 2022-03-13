export function EmailRegisterView(name) {
  return {
    content: `Seja bem vindo ${name}!`,
    subject: 'Olá!',
    text: `Olá ${name}`,
    html: `
  <center>
    <h1>Bem vindo ${name} 🥳</h1>
  </center>
  `,
  };
}
