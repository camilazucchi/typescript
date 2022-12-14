export class NegociacoesView {
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
}
