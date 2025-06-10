suma = 0
contador = 0

while True:
    num = float(input("Ingrese un número positivo (negativo para terminar): "))
    if num < 0:
        break
    suma += num
    contador += 1

if contador > 0:
    promedio = suma / contador
    print("Promedio:", promedio)
else:
    print("No se ingresaron números positivos.")
