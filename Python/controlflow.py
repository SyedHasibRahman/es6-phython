# Logical oparetor
#if statment
if 1<2:
    print('yes!')
    if 1 < 3:
        print("Secound Block")

#if else
if 1 == 1:
    if 1 > 2:
        print("True")
    elif 3 == 3:
        print("elif")
    else:
        print("False")

#loops
# For loops
seq = [1,2,3,4,5,6,7]

for num in seq:
    print(num) #or
    print('Hasib')
# for loops in dectionary
d = {"Sam":1,"Frank":2,"Dan":3}

for item in d:
    print(item)
    print(d[item])

#truple un packing
mypairs = [(1,2),(3,4),(5,6)]

for tup in mypairs:
    print(tup)
#or
for tup1,tup2 in mypairs:
    print(tup1)
    print(tup2)


#while loops in python
i = 1
while i<5:
    print("i is: {}".format(i))
    i = i+1

# Range funtion
for item in range(10):
    print(item)

for i in list(range(0,21,2)):
    print(i)

# List Comprehension
x = [1,2,3,4]

out = []
for num in x:
    out.append(num**2)

    print(out)
    #or
    out = [num**3 for num in x]
    print(out)
