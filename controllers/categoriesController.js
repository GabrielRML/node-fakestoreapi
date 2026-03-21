const axios = require('axios');

const FAKE_STORE_BASE_URL = 'https://fakestoreapi.com';

exports.getAll = async (req, res) => {
  try {
    const response = await axios.get(`${FAKE_STORE_BASE_URL}/products/categories`);
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Erro ao buscar categorias:', error.message);
    res.status(500).json({ message: 'Erro interno ao buscar categorias.' });
  }
};
