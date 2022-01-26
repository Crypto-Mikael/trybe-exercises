class CaixaEletronico:
    def __init__(self, empresa, leitor, saldoDoCaixa):
        self.empresa = empresa
        self.saldoDoCaixa = saldoDoCaixa
        self.leitor = leitor

    def retirar_dinheiro(self):
        pass

    def checkar_saldo(self):
        pass

    def depositar_dinheiro(self):
        pass

caixa_bradesco = CaixaEletronico("Bradesco", "Leitor de Cartão", 30)