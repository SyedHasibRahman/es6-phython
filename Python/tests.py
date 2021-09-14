s = 'django'

print(s[0])
print(s[-1])
print(s[:4])
print(s[1:4])
print(s[4:])
#Reassain
print(s[::-1])
l = [3,7,[1,4,'hello']]
l[2][2] = 'GoodBye'
print(l)

d1 ={'simplle_key':'hello'}
print(d1['simplle_key'])
d2 = {'k1':{'k2':'Hello'}}
print(d2['k1']['k2'])
d3 = {'k1':[{'nest_key':['this is deep', ['Hello Again']]}]}
print(d3['k1'][0]['nest_key'][1][0])

# Problem-4
mylist = set([1,1,1,1,2,2,2,2,2,3,3,3,3])
print(mylist)
mylists =[1,1,1,1,1,4,4,4,7,7,7,]
x = set(mylists)
print(x)

# given two variables
age = 4
name = 'Sammy'

print("Hello my dog's name is {a} and he is {b} years old.".format(a=name,b=age))
 
