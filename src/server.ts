import { configDotenv } from "dotenv";
import express from "express";
import bodyParser from 'body-parser';
import cors from 'cors';
import {
    criarProduto,
    editarProduto,
    deletarProduto,
    buscarProdutosPeloNome,
    buscarProdutosPelaCategoria,
    buscarProdutosPeloPreco,
    buscarProdutosPeloNomeECategoria,
    buscarProdutosPeloNomeEPreco
} from '../src/controllers/ProdutoController';
import {
    adicionarProdutoAoCarrinho,
    deletarProdutoDoCarrinho,
    editarQuantidadeNoCarrinho,
    listarProdutosNoCarrinho
} from '../src/controllers/CarrinhoController';

configDotenv();

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/produtos', criarProduto);
app.put('/produtos/:codigo', editarProduto);
app.delete('/produtos/:codigo', deletarProduto);
app.get('/produtos/nome/:nome', buscarProdutosPeloNome);
app.get('/produtos/categoria/:categoria', buscarProdutosPelaCategoria);
app.get('/produtos/preco/:intervalo', buscarProdutosPeloPreco);
app.get('/produtos/nome/:nome/categoria/:categoria', buscarProdutosPeloNomeECategoria);
app.get('/produtos/nome/:nome/preco/:intervalo', buscarProdutosPeloNomeEPreco);

app.post('/carrinho', adicionarProdutoAoCarrinho);
app.delete('/carrinho/:product', deletarProdutoDoCarrinho);
app.put('/carrinho/:product', editarQuantidadeNoCarrinho);
app.get('/carrinho', listarProdutosNoCarrinho);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
