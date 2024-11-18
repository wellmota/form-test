// api/getSubmissions.js

// Variável para armazenar cadastros temporariamente (apenas para teste)
const submissions = [];

// Função para lidar com requisições de listagem
export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(submissions);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
