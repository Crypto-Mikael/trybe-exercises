class Batedeira:
    def __init__(self, marca, tamanho, potencia):
        self.marca = marca
        self.tamanho = tamanho
        self.potencia = potencia

    def bater_conteudo(self):
        pass

    def misturar_conteudo(self):
        pass

    def ligar(self):
        pass

    def desligar(self):
        pass


batedeira_consul = Batedeira(
    "Consul", "Grande",
    "220 V")
