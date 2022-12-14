export class NegociacoesView {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    template() {
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
    update() {
        this.elemento.innerHTML = this.template();
    }
}
