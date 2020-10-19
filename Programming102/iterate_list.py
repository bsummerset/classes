my_stars =["Don Cheto", "Denzel Washington", "Mark Wahlberg", "Eddie Murphy", "Leonardo DiCaprio"]

index = 0

while index < len(my_stars):
     print(index +1,".", my_stars[index])
     index += 1

index = 0

for star in my_stars:
    print(index +1, ".", star)
    index += 1


num_list =[3,4,8]

current_value = 0
index = 0
for num in num_list:
    current_value += num_list[index]
    index += 1

print(current_value)