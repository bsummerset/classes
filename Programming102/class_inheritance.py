#can create a new class called subclass inside main class

class Hero(Mob): # Hero is a subclass of Mob. #Has all the methods that came with its parent class.
    def yell(self):
        print("I %s, sayto thou villian. Prepaer to die!" % self.name)
    
hero = Hero("Clint")
print(hero.attack_power)
bad_guy = Mob("Baddy")
hero.attack(bad_guy)