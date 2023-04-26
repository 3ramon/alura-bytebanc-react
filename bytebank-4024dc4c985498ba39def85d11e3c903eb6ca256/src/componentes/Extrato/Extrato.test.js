import { render, screen } from '@testing-library/react';
import Extrato from './index';

test('Deve renderizar uma lista de transições', () => {
  const tansacoes = [
    {
      transacao: 'Depósito',
      valor: '100',
    },
  ];

  render(<Extrato transacoes={tansacoes}/>);
  const lista = screen.getByRole('listitem');
  expect(lista).toBeInTheDocument();
});
