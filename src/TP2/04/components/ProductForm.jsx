const ProductForm = () => {
  return (
    <form className="product-form">
      <h1>Cadastro de Produtos</h1>

      <label>Nome do Produto</label>
      <input type="text" placeholder="Informe o nome do produto" />

      <div className="price-fields">
        <div>
          <label>Preço de venda</label>
          <input type="text" placeholder="Informe o preço de venda" />
        </div>
        <div>
          <label>Preço de custo</label>
          <input type="text" placeholder="Informe o preço de custo" />
        </div>
      </div>

      <div className="select-fields">
        <div>
          <label>Fornecedor</label>
          <select>
            <option value="">Selecione um fornecedor</option>
          </select>
        </div>
        <div>
          <label>Categoria</label>
          <select>
            <option value="">Selecione uma categoria</option>
          </select>
        </div>
      </div>

      <label>Descrição do Produto</label>
      <textarea placeholder="Informe a descrição do produto" />

      <button type="submit">Salvar</button>
    </form>
  );
};

export default ProductForm;
