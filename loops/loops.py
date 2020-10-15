i = 1
while i < 11:
    print(i)
    i += 1

j = 10
while j > 0:
    print (j)
    j = j - 1


username = "techguy"
user_password = "Falcon"
u_name = input("Please enter your username\n")
u_password = input("Please enter your password\n")
if u_name == username and u_password == user_password:
    print("Welcome to the world of technology!")
else:
    print("Please reenter username and password") 
