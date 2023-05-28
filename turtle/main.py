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

# def draw_sun():
#     t = turtle.Turtle()
#     t.speed(2) 

#     t.penup()
#     t.goto(0, -100) 
#     t.pendown()

#     t.color("yellow")  

#     for _ in range(36):
#         t.forward(200) 
#         t.right(170)  

#     turtle.done()

# draw_sun()

# CORAÇÂO

def draw_heart():
    t = turtle.Turtle()

    t.fillcolor("red") 
    t.begin_fill()
    t.left(140)
    t.forward(180)
    t.circle(-90, 200)
    t.left(120)
    t.circle(-90, 200)
    t.forward(180)
    t.end_fill()

    turtle.done()

draw_heart()