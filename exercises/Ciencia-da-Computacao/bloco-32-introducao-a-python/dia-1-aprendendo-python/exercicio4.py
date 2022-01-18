namesList = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]

def LarWord(list):
  result = ""
  for i in range(len(list)):
    curr = list[i]
    if(len(curr) > len(result)):
      result = curr
  return result

print(LarWord(namesList))
