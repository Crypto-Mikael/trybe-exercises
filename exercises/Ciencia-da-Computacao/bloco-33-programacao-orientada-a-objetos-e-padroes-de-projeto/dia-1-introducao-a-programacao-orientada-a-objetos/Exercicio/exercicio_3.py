from cmath import pi

class Circle:
    def __init__(self, diameter):
        self.diameter = diameter,
        self.radius = diameter / 2


    def cal_area(self):
        area = pi * (self.radius ** 2)
        print(area)


    def cal_perimeter(self):
        perimeter = (2 * pi) * self.radius
        print(perimeter)


first_circle = Circle(5)

first_circle.cal_area()
first_circle.cal_perimeter()
