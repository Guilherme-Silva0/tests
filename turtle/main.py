import turtle

# ESTRELA

# def draw_star():
#     t = turtle.Turtle()

#     for _ in range(5):
#         t.forward(100)
#         t.right(144)

#     turtle.done()

# draw_star()

# SOL

def draw_sun():
    t = turtle.Turtle()
    t.speed(2) 

    t.penup()
    t.goto(0, -100) 
    t.pendown()

    t.color("yellow")  

    for _ in range(36):
        t.forward(200) 
        t.right(170)  

    turtle.done()

draw_sun()

