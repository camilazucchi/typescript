export class NegociacoesView {
    private elemento: HTMLElement;

  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor);
  }

  template(): string {
    // retorna uma string html + dados fundidos no html
    return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        `;
  }

  // renderiza o template no elemento capturado através do constructor seletor
  update(): void {
    this.elemento.innerHTML = this.template();
  }

}
