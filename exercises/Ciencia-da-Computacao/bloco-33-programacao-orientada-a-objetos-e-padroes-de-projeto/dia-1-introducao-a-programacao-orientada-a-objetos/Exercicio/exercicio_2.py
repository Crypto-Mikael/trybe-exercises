# Exercício 2: Para exercitar nossa capacidade de abstração,
# vamos modelar algumas partes de um software de geometria. 
# Como poderíamos modelar um objeto retângulo?

class Rectangle:
    def __init__(self, base, height):
        self.base = base,
        self.height = height,

    def cal_area(self):
        area = (self.base * self.height) / 2
        return f"${area}cm"

    def cal_perimeter(self):
        perimeter = (self.base * 2) + (self.height * 2)
        return f"${perimeter}cm"
        


