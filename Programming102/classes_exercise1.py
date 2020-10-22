class Vehicle:
    def __init__(self,category, top_speed, acceleration, wheels = 4):
        self.category = category
        self.wheels = wheels
        self.top_speed = top_speed
        self.acceleration = acceleration
        self.speed = 0
        self.position = 0
        

    def move(self):
        self.accelerate() #call accelerate. 
        self.position += self.speed

    def accelerate(self):  #Dont forget to include self!!!!!
        self.speed += self.acceleration
        if self.speed < self.top_speed:
            self.speed = self.top_speed

    def reset(self):
        self.position = 0
        self.speed = 0

all_cars = {
"camero":Vehicle("MuscleCar",100, 8),
"silverado":Vehicle("Truck", 100, 4),
"minivan":Vehicle("Minivan", 50,3),
"mustang":Vehicle("sport",120,6 ),
"Yamaha YZF R1": Vehicle("Motorcycle", 185,9)

}



def run_race(time):

    for i in range(time):
    #print(f"************Second {i}***************")
        for car_name in all_cars:
            all_cars[car_name]. move()

    print("Race is Over")
    for car_name in all_cars:
        print(f" {car_name} - {all_cars[car_name].position}")

print("20 Second run!")
    

        
        cur_car = all_cars[car_name]
        cur_car.move()
        print(f"{car_name} - {cur_car.speed} m/s")
#         all_cars[car_name].move

# for car_name in all_cars:
#     print(f" {car_name} - {all_cars[car_name].position}")


# print(motorcycle.wheels)

