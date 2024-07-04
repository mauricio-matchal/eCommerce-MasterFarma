-- CreateTable
CREATE TABLE "Produto" (
    "nome" TEXT NOT NULL,
    "preco_ant" REAL NOT NULL,
    "preco_atual" REAL NOT NULL,
    "codigo" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "categoria" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Carrinho" (
    "quantidade" INTEGER NOT NULL DEFAULT 1,
    "product" INTEGER NOT NULL,
    CONSTRAINT "Carrinho_product_fkey" FOREIGN KEY ("product") REFERENCES "Produto" ("codigo") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Produto_codigo_key" ON "Produto"("codigo");

-- CreateIndex
CREATE UNIQUE INDEX "Carrinho_product_key" ON "Carrinho"("product");
