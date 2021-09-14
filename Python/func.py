def my_func(pram1='default'):
    """
    This is the Docstring
    """
    print('My first python function! {}'. format(pram1))

my_func()

# Return Kye function

def hello():
    print("hello")
hello()

def ahello():
    return "Hello"

result = ahello()
print(result)

# multy NUM function
def addNum(num1,num2):
    return num1+num2
result =addNum("2","3")
print(result)
# Check intiger
print(type(result))

def addNum2(num1,num2):
    return num1+num2
result = addNum2(2,3)
print(result)
# Check intiger
print(type(result))

# if else in function
def addNum3(num1,num2):
    if type(num1)==type(num2)==type(10):
        return num1+num2
    else:
        return "Sorry! I need integers"
result = addNum3(4,5)
print(result)

#####
def addNum3(num1,num2):
    if type(num1)==type(num2)==type(10):
        return num1+num2
    else:
        return "Sorry! I need integers"
result = addNum3('4','5')
print(result)



# Filter Vs
mylist1 = [1,2,3,4,5,6,7,8]
def even_bool(num):
    return num%2 == 0
evens = filter(even_bool,mylist1)
print(list(evens))
# Lambda Expression Vs filter
mylist = [1,2,3,4,5,6,7,8]
evenss = filter(lambda num:num%2 == 0,mylist)
print(list(evenss))

# Split Method
st = 'hello'
st.lower()
st.upper()
st.split()

tweet = "Go Sports! # Sports"

result = tweet.split('#')
print(result)
#or
result = tweet.split('#')[1]
print(result)

# in oparatior

print('x' in [1,2,3])

print('y' in [1,2,3,'y'])





print()
