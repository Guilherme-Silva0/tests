import turtle

# ESTRELA

def draw_star():
    t = turtle.Turtle()

    for _ in range(5):
        t.forward(100)
        t.right(144)

    turtle.done()

draw_star()
