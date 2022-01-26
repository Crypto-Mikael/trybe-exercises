import csv
import json


class SalesReport():
    def __init__(self, export_file_json, export_file_csv):
        self.export_file_json = export_file_json + '.json'
        self.export_file_csv = export_file_csv + '.csv'

    def build_json(self):
        """ Aqui colocamos a lógica para a entidade 'se criar',
        ou seja, criar um relatório imprimível. Por simplicidade,
        vamos omitir essa lógica nos exemplos! """
        return [{
                'Coluna 1': 'Dado 1',
                'Coluna 2': 'Dado 2',
                'Coluna 3': 'Dado 3'
                },
                {
                'Coluna 1': 'Dado A',
                'Coluna 2': 'Dado B',
                'Coluna 3': 'Dado C'
                }]

    def build_csv(self, file):
        filednames = ['Coluna 1', 'Coluna 2', 'Coluna 3']
        write = csv.DictWriter(file, fieldnames=filednames)

        write.writeheader()
        write.writerow(
            {'Coluna 1': 'Dados 1', 'Coluna 2': 'Dados 2', 'Coluna 3': 'Dados 3'})

    def serialize_json(self):
        # Vamos gerar, aqui, o nosso relatório em formato JSON
        with open(self.export_file_json, 'w') as file:
            json.dump(self.build_json(), file)

    def serialize_csv(self):
        # Vamos gerar, aqui, o nosso relatório em formato CSV
        with open(self.export_file_csv, 'w') as file:
            self.build_csv(file)


meu_relatorio_de_vendas = SalesReport(
    'meu_relatorio', 'meu_relatorio_planilha')


meu_relatorio_de_vendas.serialize_json()
meu_relatorio_de_vendas.serialize_csv()
