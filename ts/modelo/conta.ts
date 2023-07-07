class Conta {
    numero: string;
    private _saldo: number;

    constructor(numero: string, saldo=0) {
        this._saldo = saldo;
        this.numero = numero;
    }

    debitar(valor: number){
        if (this._saldo >= valor){
            this._saldo -= valor;
        }
    }

    creditar(valor: number){
        this._saldo += valor;
    }

    transferir(destino : Conta, valor: number){
        this.debitar(valor);
        destino.creditar(valor);
    }

    get saldo(){
        return this._saldo;
    }
}
