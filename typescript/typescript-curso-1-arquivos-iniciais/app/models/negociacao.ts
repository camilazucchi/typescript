export class Negociacao {

  constructor(
    public readonly data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) {}

  get volume() {
    return this.quantidade * this.valor;
  }
}