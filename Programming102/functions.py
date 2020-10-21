# def my_func():
#     print("Boss")

# my_func()


# def multiply_two_numbers(a,b):
   
#     if type(a)==int and type(b)== int:
#        print(a*b)  
#     else:
#         print("invalid input")

# multiply_two_numbers(7,9)



# def my_func (title, genre, year):



def movie(title,genre,year):
    print(f"1. Title : {title}")
    print(f"2. Genre : {genre}")
    print(f"3. Year : {year}")


movie("Brian" , "Yut", 1986)


def movie(movie_item):
    title = movie_item[0]
    genre = movie_item[1]
    year = movie_item[2]

    print(f"1. Title : {title}")
    print(f"2. Genre : {genre}")
    print(f"3. Year : {year}")

movie(["Brian", "yut", 1986])


# def movie(movie_item):
#     index  = 1
#     for item in movie_item:
#         print(f"{index}. {item} : {movie_item[item]}")
#         index += 1

#     movie({"Genre":"Horror" , "Title": "Brian the Man", "year":2020})