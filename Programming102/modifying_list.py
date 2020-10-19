# name_list = ["Brian", "Kyle", "Cayson", "Tekeria"]

# name_list.append("Joe")
# name_list.append("Anthony")

# print(name_list)


# new_name_list = ["Mike", "Joe", "Bob", "Will", "Jess"]

# new_name_list[2] = "Foo"
# new_name_list[4] = "Bar"

# print(new_name_list)


# names = ["Bill", "Eric", "Paul", "Will", "Travis"]

# # index = 0
# # while index < len(names[index]):
# #     print(names)
# #     index += 1
# #    while names[index] >= index:
# #     print(names[index])

# while len(names):
#     print(names[0])
#     del(names[0])


# print(id(1))

# x = 1
# print(id(x))

# x = 'a'
# print(id('a'))

c = [1,2,3]
d = c
print(id(c),id(d))
c.append(4)
print(c,d)