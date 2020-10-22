class Person:
   def __init__(self, name, age, height = "normal") :
        print("You created a new instance of Person")
        self.name = name
        self.age = age
        self.height = height

# Dot notation: with object or class; im going to get access (clint name and age)
# classes can have functions inside the class
#self- standard for every method inside a class
    #---the first parameter

clint = Person("Clint", 38, "short"
anna = Person("Anna",37)

print(f"Wow {clint.name} you are {clint.age} years old")
print(clint.height)
print(anna.height)

#Attributes = Are values in a class that can be accessed using the attribute name. 
    #-- Much like key in a dictionary.
#self is the instance of the object. It is put into every single class