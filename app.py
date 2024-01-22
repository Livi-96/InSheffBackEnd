myList = ['hello', 'i', 'am', 'livi']

def sortFun(e):
    return len(e)

def myFunction():
    print(myList)
    myList.sort(key=sortFun)
    print(myList)

myFunction()