import perlin
import random
import matplotlib.pyplot as plt

def show_perlin_noise():
    noise=perlin.Perlin(15)

    time=[i for i in range(200)]
    values=[noise.valueAt(i) for i in time]

    plt.title("Perlin Noise")
    plt.xlabel("Time")
    plt.ylabel("Value")
    plt.plot(time, values)
    plt.show()
