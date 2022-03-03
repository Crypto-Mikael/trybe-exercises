list = [0, 1, 2, 3, 4, 12]

def invertList(list):
    arrayinverted = []
    for i in range(len(list)):
        if (i != 0):
            arrayinverted.append(list[len(list) - i])
    arrayinverted.append(list[0])
    return arrayinverted


print(invertList(list))