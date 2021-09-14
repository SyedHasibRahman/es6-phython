mystring = 'Syed Hasib Rahman' #mystring
print(mystring[0]) #INDEXING
print(mystring[-1]) #INDEXING
#Slicing
print(mystring[5:])
print(mystring[:5])
abc = 'abcdefg'
print(abc[2:5])
print(mystring[5:10])
print(abc[::2])


x = abc.upper()
print(x)
y = abc.capitalize()
print(y)
mysplit = 'Hello World'
a = mysplit.split()
print(a)

b = mysplit.split('e')
print(b)



#Print Formatting...

xx = "Insert another srting here: {}".format("INSERT ME!")
print(xx);
yy = "Item ONe: {} Item Two: {}".format("Dog ,", "Cat")
print(yy)
yyy = "Item ONe: {b} Item Two: {a}".format(a = "Dog", b = "Cat ,")
print(yyy)
