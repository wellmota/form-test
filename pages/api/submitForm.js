// api/submitForm.js

import { submissions } from './getSubmissions';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Verifica se os campos estão preenchidos
    if (!name || !email || !message) {
      return res.status(400).json({
        error: 'Todos os campos são obrigatórios.',
      });
    }

    // Adiciona os dados ao array de submissões
    submissions.push({ name, email, message, date: new Date() });

    // Envia a resposta
    res.status(200).json({
      message: 'Formulário recebido com sucesso!',
      data: { name, email, message },
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
