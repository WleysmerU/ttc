a = int(input("Ingrese el primer número: "))
b = int(input("Ingrese el segundo número: "))
c = int(input("Ingrese el tercer número: "))

if a >= b and a >= c:
    print("El mayor es:", a)
elif b >= a and b >= c:
    print("El mayor es:", b)
else:
    print("El mayor es:", c)
