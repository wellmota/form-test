export default function handler(req, res) {
    if (req.method === 'POST') {
      const formData = req.body; // Captura os dados enviados no formulário
      console.log('Dados do formulário recebidos:', formData);
  
      // Retorne uma resposta de sucesso
      res.status(200).json({ message: 'Formulário recebido com sucesso!', data: formData });
    } else {
      res.status(405).json({ message: 'Método não permitido' });
    }
  }