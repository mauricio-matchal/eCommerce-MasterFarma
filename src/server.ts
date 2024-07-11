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
    buscarProdutosPeloNomeEPreco,
    buscarTodosOsProdutos,
    buscarProdutoPeloCodigo,
    buscarProdutosPelaCategoriaEPreco,
    buscarProdutosPorNomeCategoriaEPreco
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
app.get('/produtos', buscarTodosOsProdutos);
app.get('/produtos/nome/:nome', buscarProdutosPeloNome);
app.get('/produtos/categoria/:categoria', buscarProdutosPelaCategoria); //talvez não precisaremos mais dessa rota
app.get('/produtos/preco/:intervalo', buscarProdutosPeloPreco); //talvez não precisaremos mais dessa rota
app.get('/produtos/nome/:nome/categoria/:categoria', buscarProdutosPeloNomeECategoria); //talvez não precisaremos mais dessa rota
app.get('/produtos/nome/:nome/preco/:intervalo', buscarProdutosPeloNomeEPreco); //talvez não precisaremos mais dessa rota
app.get('/produtos/codigo/:codigo', buscarProdutoPeloCodigo);
app.get('/produtos/categoria-preco', buscarProdutosPelaCategoriaEPreco); // Nova rota para o filtro da página de gestão
app.get('/produtos/nome-categoria-preco', buscarProdutosPorNomeCategoriaEPreco); // Nova rota para o filtro da página de resultados


app.post('/carrinho', adicionarProdutoAoCarrinho);
app.delete('/carrinho/:product', deletarProdutoDoCarrinho);
app.put('/carrinho/:product', editarQuantidadeNoCarrinho);
app.get('/carrinho', listarProdutosNoCarrinho);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
