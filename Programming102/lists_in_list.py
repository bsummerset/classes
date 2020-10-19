shopping_list = [
    ['Corn', 'Potatoes', 'Tomatoes'],
    ['milk', 'eggs', 'cheese','yogurt'],
    ['frozen pizza', 'popsicle']
]

# print(shopping_list[0])
# print(shopping_list[1])
# print(shopping_list[2])

# for list in shopping_list:
#     print(list)


shopping_names = ["veggies", "Cold Items", "Snacks"]

count = 0
i = 0

for name in shopping_names:
    j = 0
    print("%s. %s" % (i +1,name))
    for food in shopping_list[i]:
        print("%s. %s"% (j+ 1, food))

    i += 1    
