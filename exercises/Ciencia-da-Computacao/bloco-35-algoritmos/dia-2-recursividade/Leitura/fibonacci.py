def fibonnaciresolver(times):
    array = [0, 1]

    for i in range(times):
        array.append(array[i] + array[i + 1])

    return array[times + 1]

print(fibonnaciresolver(11))
    