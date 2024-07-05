import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const adicionarProdutoAoCarrinho = async (req: Request, res: Response) => {
    const { product, quantidade } = req.body;
    try {
        const produtoExistente = await prisma.carrinho.findUnique({ where: { product } });
        if (produtoExistente) {
            res.status(400).json({ error: 'Produto já está no carrinho' });
        } else {
            const novoItem = await prisma.carrinho.create({
                data: { product, quantidade }
            });
            res.json(novoItem);
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao adicionar produto ao carrinho' });
    }
};

export const deletarProdutoDoCarrinho = async (req: Request, res: Response) => {
    const { product } = req.params;
    try {
        await prisma.carrinho.delete({ where: { product: Number(product) } });
        res.json({ message: 'Produto removido do carrinho com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao remover produto do carrinho' });
    }
};

export const editarQuantidadeNoCarrinho = async (req: Request, res: Response) => {
    const { product } = req.params;
    const { quantidade } = req.body;
    try {
        const produtoAtualizado = await prisma.carrinho.update({
            where: { product: Number(product) },
            data: { quantidade }
        });
        res.json(produtoAtualizado);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar quantidade do produto no carrinho' });
    }
};

export const listarProdutosNoCarrinho = async (req: Request, res: Response) => {
    try {
        const carrinho = await prisma.carrinho.findMany({
            include: { produto: true }
        });
        if (carrinho.length === 0) {
            res.json({ message: 'Seu carrinho está vazio' });
        } else {
            res.json(carrinho);
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar produtos no carrinho' });
    }
};
