# CSS Chris
CSS com funcionalidades básicas.

## Navbar

```html
<ul class="navbar"><!-- class="navbar [red] [green] [purple]"-->
  <li>
    <a class="ativo" href="#home">Home</a>
  </li>
  <li>
    <a href="#news">News</a>
  </li>
  <li>
    <a href="#contact">Contact</a>
  </li>
  <li class="dropdown">
    <a href="javascript:void(0)">Dropdown</a>
    <div class="dropdown-content">
      <a href="#">Item 1</a>
      <a href="#">Item 2</a>
      <a href="#">Item 3</a>
    </div>
  </li>
  <li class="right">
    <a href="#about">About</a>
  </li>
</ul>
```

## Sidebar

```html
<ul class="sidebar">
  <li>
    <a class="ativo" href="#home">Home</a>
  </li>
  <li>
    <a href="#news">News</a>
  </li>
  <li>
    <a href="#contact">Contact</a>
  </li>
  <li class="dropdown">
    <a href="javascript:void(0)">Dropdown</a>
    <div class="dropdown-content">
      <a href="#">Item 1</a>
      <a href="#">Item 2</a>
      <a href="#">Item 3</a>
    </div>
  </li>
  <li class="right">
    <a href="#about">About</a>
  </li>
</ul>
<div class="content">
  Conteudo...
</div>
```
## Navs

```html
<ul class="nav"><!-- class="nav guia" ou class="nav pilula"-->
  <li><a class="ativo" href="#">Tab 1</a></li>
  <li><a href="#">Tab 2</a></li>
  <li><a href="#">Tab 3</a></li>
  <li><a href="#">Tab 4</a></li>
</ul>
```

## Botões

```html
    <input type="button" class="btn" value="Padrão" />
    <input type="button" class="btn primario" value="Primário" />
    <input type="button" class="btn sucesso" value="Sucesso" />
    <input type="button" class="btn erro" value="Erro" />
    <input type="button" class="btn atencao" value="Atenção" />
    <input type="button" class="btn secundario" value="Secundário" />
    <a class="btn primario" href="#">btn primario</a>
```

## Tabelas

```html
<table class="tabela">
<!-- table class="tabela centro" -->
<!-- table class="tabela listra" -->
<!-- table class="tabela hover" -->
<!-- table class="tabela responsiva"> Obs: número de colunas sempre
                                      deve ser igual ao de campos -->
  <thead>
    <tr>
      <th>#</th>
      <th>Login</th>
      <th>Grupo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>joao</td>
      <td>Adm</td>
    </tr>
    <tr>
      <td>2</td>
      <td>maria.pereira</td>
      <td>Usuario</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Jose</td>
      <td>Usuario</td>
    </tr>
  </tbody>
</table>
```

## Formulários

### Formulário linear
```html
<form class="formulario">
  <input type="text" name="login" value="" placeholder="Login" />
  <input type="email" name="email" value="" placeholder="E-mail" />
  <label for="ativo">
    <input type="checkbox" name="ativo" id="ativo" /> Ativo
  </label>
  <select name="sexo" id="sexo">
    <option disabled="" selected="">Sexo:</option>
    <option value="">M</option>
    <option value="">F</option>
  </select>
  <input class="btn" type="button" name="botao" value="Confirmar" />
</form>
```

### Formulário empilhado
```html
<form class="formulario empilhado">
  <label for="nome">Nome</label>
  <input type="text" name="nome" />
  <label for="login">Login</label>
  <input type="text" name="login" />
  <label for="idade">Idade</label>
  <input type="number" name="idade" />
  <label for="email">E-mail</label>
  <input type="email" name="email" />
  <label for="data">Data</label>
  <input type="datetime" name="data" />
  <label for="ativo">
    <input type="checkbox" name="ativo" /> Ativo
  </label>
  <label for="sexo">Sexo</label>
  <select name="sexo">
    <option value="">M</option>
    <option value="">F</option>
  </select>
  <input class="btn" type="button" name="botao" value="Confirmar" />
</form>
```

### Formulário alinhado
```html
<form class="formulario">
  <div class="form-group">
    <label for="nome">Nome</label>
    <input type="text" name="nome" />
  </div>
  <div class="form-group">
    <label for="login">Login</label>
    <input type="text" name="login" />
  </div>
  <div class="form-group">
    <label for="idade">Idade</label>
    <input type="number" name="idade" />
  </div>
  <div class="form-group">
    <label for="email">E-mail</label>
    <input type="email" name="email" />
  </div>
  <div class="form-group">
    <label for="data">Data</label>
    <input type="datetime" name="data" />
  </div>
  <div class="form-group">
    <label for="ativo" class="checkbox-label">
      <input type="checkbox" name="ativo" /> Ativo
    </label>
  </div>
  <div class="form-group">
    <label for="sexo">Sexo</label>
    <select name="sexo">
      <option value="">M</option>
      <option value="">F</option>
    </select>
  </div>
  <input class="btn" type="button" name="botao" value="Confirmar" />
</form>
```

## Modal

Link para abrir modal:
```html
<a href="#" modal="modal1">Abrir modal</a>
```

Modal:
```html
<div class="modal" id="modal1">
  <div class="modal-header">
    Cabeçalho
  </div>
  <div class="modal-body">
    Conteúdo dentro do modal 1.<br>
    Conteúdo dentro do modal 1.<br>
  </div>
  <div class="modal-footer">
    <button class="btn">Ok</button>
  </div>
</div>
```
## Lista

```html
<ul class="lista compacta">
  <li>Item 1</li>
  <li>Item 2</li>
  <li class="disabled">Item 3</li>
  <li>Item 4</li>
</ul>
```
