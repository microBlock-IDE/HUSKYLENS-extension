from machine import Pin, I2C

ADDRESS = 0x32

i2c1 = I2C(1, scl=Pin(5), sda=Pin(4), freq=100000)

# Command List
START_CMD = b'\x55\xAA\x11'
COMMAND_REQUEST_KNOCK = START_CMD + b'\x00\x2C\x3C'
COMMAND_REQUEST = START_CMD + b'\x00\x20\x30'
COMMAND_REQUEST_ALGORITHM = START_CMD + b'\x02\x2D'

FACE_RECOGNITION = 0
OBJECT_TRACKING = 1
OBJECT_RECOGNITION = 2
LINE_TRACKING = 3
COLOR_RECOGNITION = 4
TAG_RECOGNITION = 5
CLASSIFICATION = 6

COMMAND_RETURN_OK = START_CMD + b'\x00\x2E\x3E'

def isReady():
    try:
        i2c1.writeto(ADDRESS, COMMAND_REQUEST_KNOCK, len(COMMAND_REQUEST_KNOCK))
        res = i2c1.readfrom(ADDRESS, len(COMMAND_RETURN_OK))
        return res == COMMAND_RETURN_OK
    except OSError:
        return False

def setAlgorithm(index):
    cmd = COMMAND_REQUEST_ALGORITHM + bytes([ index, 0, 0x3F + index ])
    i2c1.writeto(ADDRESS, cmd, len(cmd))
    res = i2c1.readfrom(ADDRESS, len(COMMAND_RETURN_OK))
    return res == COMMAND_RETURN_OK

blocks = { }

def b2i(x, y):
    return (x << 8) | y

def readBlockInfo():
    global blocks
    data = i2c1.readfrom(ADDRESS, 16)
    if data.index(START_CMD + b'\x0A\x2A') == 0:
        data = data[5:]
        index = b2i(data[9], data[8])
        blocks[index] = {
            "x": b2i(data[1], data[0]),
            "y": b2i(data[3], data[2]),
            "w": b2i(data[5], data[4]),
            "h": b2i(data[7], data[6])
        }
        return True
    print("DATA ERROR")
    return False

def update():
    global blocks
    i2c1.writeto(ADDRESS, COMMAND_REQUEST, len(COMMAND_REQUEST))
    data = i2c1.readfrom(ADDRESS, 16)
    if data.index(START_CMD + b'\x0A\x29') == 0:
        data = data[5:]
        blocksLen = int(data[0])
        learnedLen = int(data[2])
        blocks = { }
        for i in range(blocksLen):
            readBlockInfo()
    else:
        print("DATA ERROR")

def blockIsReady(index):
    return index in blocks

def blockGetPos(index):
    if not blockIsReady(index):
        return ( 0, 0 )
    return (blocks[index]["x"], blocks[index]["y"])

def blockGetSize(index):
    if not blockIsReady(index):
        return ( 0, 0 )
    return (blocks[index]["w"], blocks[index]["h"])
