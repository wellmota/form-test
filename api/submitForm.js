// api/submitForm.js

// Importa o array de submissões
import { submissions } from './getSubmissions';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Adiciona os dados ao array de submissões
    submissions.push({ name, email, message, date: new Date() });

    res.status(200).json({
      message: "Formulário recebido com sucesso!",
      data: { name, email, message },
    });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
