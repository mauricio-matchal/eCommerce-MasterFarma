import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

const getPrecoCondition = (intervalo: string) => { //condições de intervalos usadas nas funções buscarProdutosPelaCategoriaEPreco e buscarProdutosPorNomeCategoriaEPreco
    switch (intervalo) {
        case 'ate-50':
            return { lte: 50 };
        case 'ate-100':
            return { lte: 100 };
        case 'ate-200':
            return { lte: 200 };
        case 'acima-200':
            return { gt: 200 };
        default:
            return null;
    }
};

export const criarProduto = async (req: Request, res: Response) => {
    const { nome, preco_ant, preco_atual, codigo, categoria } = req.body;
    try {
        const novoProduto = await prisma.produto.create({
            data: { nome, preco_ant, preco_atual, codigo, categoria }
        });
        res.json(novoProduto);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar produto' });
    }
};

export const editarProduto = async (req: Request, res: Response) => {
    const { codigo } = req.params;
    const { nome, preco_ant, preco_atual, categoria } = req.body;
    try {
        const produtoAtualizado = await prisma.produto.update({
            where: { codigo: Number(codigo) },
            data: { nome, preco_ant, preco_atual, categoria }
        });
        res.json(produtoAtualizado);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar produto' });
    }
};

export const deletarProduto = async (req: Request, res: Response) => {
    const { codigo } = req.params;
    try {
        await prisma.produto.delete({ where: { codigo: Number(codigo) } });
        res.json({ message: 'Produto deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar produto' });
    }
};

export const buscarTodosOsProdutos = async (req: Request, res: Response) => {
    try {
        const produtos = await prisma.produto.findMany();
        res.json(produtos);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar todos os produtos' });
    }
};

export const buscarProdutosPeloNome = async (req: Request, res: Response) => {
    const { nome } = req.params;
    try {
        const produtos = await prisma.produto.findMany({
            where: { nome: { contains: nome} }
        });
        if (produtos.length === 0) {
            res.json({ message: `Não encontramos resultados para ${nome}` });
        } else {
            res.json({ message: `Exibindo resultados para ${nome}`, produtos });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar produtos' });
    }
};

export const buscarProdutosPelaCategoria = async (req: Request, res: Response) => {
    const { categoria } = req.params;
    try {
        const produtos = await prisma.produto.findMany({ where: { categoria } });
        res.json(produtos);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar produtos pela categoria' });
    }
};

export const buscarProdutosPeloNomeECategoria = async (req: Request, res: Response) => {
    const { nome, categoria } = req.params;
    try {
        const produtos = await prisma.produto.findMany({
            where: {
                nome: { contains: nome },
                categoria
            }
        });
        if (produtos.length === 0) {
            res.json({ message: `Não encontramos resultados para nome: ${nome} e categoria: ${categoria}` });
        } else {
            res.json({ message: `Exibindo resultados para nome: ${nome} e categoria: ${categoria}`, produtos });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar produtos' });
    }
};

export const buscarProdutosPeloPreco = async (req: Request, res: Response) => {
    const { intervalo } = req.params;
    let condition;
    switch (intervalo) {
        case 'ate-50':
            condition = { lte: 50 };
            break;
        case 'ate-100':
            condition = { lte: 100 };
            break;
        case 'ate-200':
            condition = { lte: 200 };
            break;
        case 'acima-200':
            condition = { gt: 200 };
            break;
        default:
            return res.status(400).json({ error: 'Intervalo inválido' });
    }
    try {
        const produtos = await prisma.produto.findMany({
            where: { preco_atual: condition }
        });
        res.json(produtos);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar produtos pelo preço' });
    }
};

export const buscarProdutosPeloNomeEPreco = async (req: Request, res: Response) => {
    const { nome, intervalo } = req.params;
    let condition;
    switch (intervalo) {
        case 'ate-50':
            condition = { lte: 50 };
            break;
        case 'ate-100':
            condition = { lte: 100 };
            break;
        case 'ate-200':
            condition = { lte: 200 };
            break;
        case 'acima-200':
            condition = { gt: 200 };
            break;
        default:
            return res.status(400).json({ error: 'Intervalo inválido' });
    }
    try {
        const produtos = await prisma.produto.findMany({
            where: {
                nome: { contains: nome },
                preco_atual: condition
            }
        });
        if (produtos.length === 0) {
            res.json({ message: `Não encontramos resultados para nome: ${nome} e intervalo de preço: ${intervalo}` });
        } else {
            res.json({ message: `Exibindo resultados para nome: ${nome} e intervalo de preço: ${intervalo}`, produtos });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar produtos' });
    }
};

export const buscarProdutoPeloCodigo = async (req: Request, res: Response) => {
    const { codigo } = req.params;
    try {
        const produto = await prisma.produto.findUnique({
            where: { codigo: Number(codigo) }
        });
        if (!produto) {
            return res.status(404).json({ message: `Produto com código ${codigo} não encontrado` });
        }
        res.json(produto);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar produto pelo código' });
    }
};

export const buscarProdutosPelaCategoriaEPreco = async (req: Request, res: Response) => { //função para fazer a rota do filtro da página de gestão
    const { categoria, intervalo } = req.query;
    const conditions: any = {};

    if (categoria) {
        conditions.categoria = categoria;
    }
    if (intervalo) {
        const precoCondition = getPrecoCondition(intervalo as string);
        if (precoCondition) {
            conditions.preco_atual = precoCondition;
        } else {
            return res.status(400).json({ error: 'Intervalo de preço inválido' });
        }
    }

    try {
        const produtos = await prisma.produto.findMany({ where: conditions });
        res.json(produtos);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar produtos pela categoria e preço' });
    }
};

export const buscarProdutosPorNomeCategoriaEPreco = async (req: Request, res: Response) => { // funçao para fazer a rota do filtro da página de resultados
    const { nome, categoria, intervalo } = req.query;
    const conditions: any = {};

    if (nome) {
        conditions.nome = { contains: nome as string };
    }
    if (categoria) {
        conditions.categoria = categoria;
    }
    if (intervalo) {
        const precoCondition = getPrecoCondition(intervalo as string);
        if (precoCondition) {
            conditions.preco_atual = precoCondition;
        } else {
            return res.status(400).json({ error: 'Intervalo de preço inválido' });
        }
    }

    try {
        const produtos = await prisma.produto.findMany({ where: conditions });
        res.json(produtos);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar produtos por nome, categoria e preço' });
    }
};