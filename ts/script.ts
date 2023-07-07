const c1 = new Conta('1', 100);
const c2 = new Conta('2');

const contaController = new ContaController();
contaController.adicionarConta(c1);
contaController.adicionarConta(c2);
contaController.listar();

const contaBonificada = new ContaBonificada('10', 100);
contaBonificada.creditar(10);
//console.log(contaBonificada.saldo);


// const repContas = new RepositorioContas();
//
// const c1 = new Conta('1', 100);
// const c2 = new Conta('2');
//
// repContas.adicionar(c1);
// repContas.adicionar(c2);
//
// repContas.getContas().forEach(conta => console.log(conta.numero))

// console.log(c1.saldo)
// console.log(c2.saldo)
//
// c1.saldo = 200;
//
// c1.debitar(50);
// c2.creditar(1000);
// console.log(c1.saldo)
// console.log(c2.saldo)
//
// c2.transferir(c1, 500);
// console.log(c1.saldo)
// console.log(c2.saldo)


//const dateString: string = '03/10/1998';
//const dateParts: string[] = dateString.split('/');
//const myDate: Date = new Date(parseInt(dateParts[2]), parseInt(dateParts[1]) - 1, parseInt(dateParts[0]));

const myDate = new Date();
let pessoa = new Pessoa('Gabriel1', 24, myDate);

console.log(pessoa);

let pessoaFisica = new PessoaFisica('Gabriel2', 24, myDate);
console.log(pessoaFisica);

let pessoaJuridica = new PessoaJuridica('Gabriel3', 24, myDate);
console.log(pessoaJuridica);