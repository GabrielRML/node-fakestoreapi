const axios = require('axios');

const FAKE_STORE_BASE_URL = 'https://fakestoreapi.com';

exports.getAll = async (req, res) => {
  try {
    const response = await axios.get(`${FAKE_STORE_BASE_URL}/products`);
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Erro ao buscar produtos:', error.message);
    res.status(500).json({ message: 'Erro interno ao buscar produtos da loja.' });
  }
};

exports.getById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(`${FAKE_STORE_BASE_URL}/products/${id}`);

    if (!response.data) {
      return res.status(404).json({ message: 'Produto não encontrado.' });
    }

    res.status(200).json(response.data);
  } catch (error) {
    console.error(`Erro ao buscar produto ${id}:`, error.message);
    res.status(500).json({ message: 'Erro interno ao buscar o produto.' });
  }
};
