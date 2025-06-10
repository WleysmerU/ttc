nombres = []

while True:
    nombre = input("Ingrese un nombre (escriba 'salir' para terminar): ")
    if nombre.lower() == 'salir':
        break
    nombres.append(nombre)

print("\nNombres ingresados:")
for n in nombres:
    print("-", n)
