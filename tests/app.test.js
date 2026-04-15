const request = require('supertest');
const axios = require('axios');
const app = require('../app');

jest.mock('axios');

afterEach(() => {
  jest.clearAllMocks();
});

describe('FakeStore BFF API', () => {
  describe('GET /api/products', () => {
    it('deve retornar a lista de produtos com status 200', async () => {
      const mockProducts = [{ id: 1, title: 'Produto Teste', price: 109.95 }];
      axios.get.mockResolvedValue({ data: mockProducts });

      const response = await request(app).get('/api/products');

      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockProducts);
      expect(axios.get).toHaveBeenCalledWith('https://fakestoreapi.com/products');
    });

    it('deve retornar erro 500 se a API externa falhar', async () => {
      axios.get.mockRejectedValue(new Error('Network Error'));

      const response = await request(app).get('/api/products');

      expect(response.status).toBe(500);
      expect(response.body).toHaveProperty('message', 'Erro interno ao buscar produtos da loja.');
    });
  });

  describe('GET /api/products/:id', () => {
    it('deve retornar o detalhe do produto com status 200', async () => {
      const mockProduct = { id: 1, title: 'Produto Teste' };
      axios.get.mockResolvedValue({ data: mockProduct });

      const response = await request(app).get('/api/products/1');

      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockProduct);
      expect(axios.get).toHaveBeenCalledWith('https://fakestoreapi.com/products/1');
    });

    it('deve retornar 404 se o produto não for encontrado', async () => {
      axios.get.mockResolvedValue({ data: null });

      const response = await request(app).get('/api/products/999');

      expect(response.status).toBe(404);
      expect(response.body).toHaveProperty('message', 'Produto não encontrado.');
    });
  });

  describe('GET /api/categories', () => {
    it('deve retornar a lista de categorias com status 200', async () => {
      const mockCategories = ['electronics', 'jewelery'];
      axios.get.mockResolvedValue({ data: mockCategories });

      const response = await request(app).get('/api/categories');

      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockCategories);
      expect(axios.get).toHaveBeenCalledWith('https://fakestoreapi.com/products/categories');
    });

    it('deve retornar 500 se a API externa falhar', async () => {
      axios.get.mockRejectedValue(new Error('Network Error'));

      const response = await request(app).get('/api/categories');

      expect(response.status).toBe(500);
      expect(response.body).toHaveProperty('message', 'Erro interno ao buscar categorias.');
    });
  });
});
