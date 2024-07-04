import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

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

