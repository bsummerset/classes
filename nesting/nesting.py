pet_name = input("What is your pet's name?\n")
if len(pet_name) < 3:
    print("You're pet name is too SHORT")
    if pet_name == "Shadow":
        print("El Gato Diable")
    if pet_name == "Daisy":
        print("Good Dog!")  
else:
    print(f"Awwww sweet {pet_name}")