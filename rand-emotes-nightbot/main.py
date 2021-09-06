# Task: Return a string of random emotes choosen from a list of emotes.

from random import randint

# Available commands
commands = ["denversGVO", "denversAyye"]
multiplier = 10


def main():
    lastCommand = ""
    output = []
    for i in range(multiplier):
        randCommand = getRandCommand()
        if randCommand != lastCommand:
            lastCommand = randCommand
            output.append(randCommand)
    print(output)


def getRandCommand():
    return commands[randint(0, len(commands) - 1)]


if __name__ == "__main__":
    main()
