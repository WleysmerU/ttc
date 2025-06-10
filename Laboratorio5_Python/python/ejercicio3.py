n = int(input("¿Cuántos números pares desea generar?: "))

print("Números pares:")
for i in range(2, 2 * n + 1, 2):
    print(i)
