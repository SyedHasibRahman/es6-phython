#List
# mylist = [1,2,3]
mylist = ['strings',1,2,3,4, True, 'Hasib',[1,2,3]]
print(mylist)
mylist2 = ['a','b','c','d','e']
print(mylist2)
print(mylist2[0])
print(mylist2[-1])
print(mylist2[2:])
print(mylist2[:3])

print('before reassignment:')

mylist2[0] ='New Item'
print('After Reassignment:')
print(mylist2)

#append
mylist3 = ['a','b','c','d','e']
mylist3.append(['x','y','z'])
print(mylist3)
#extend
list3 = ['x','y','z']
mylist3.extend(list3)
print(mylist3)

# Removing From list
mylist4 = ['1','2','3','4','5']
item = mylist4.pop()
print(mylist4)
print(item)
item2 = mylist4.pop(0)
print(item2)

#reverse
mylist4.reverse()
print(mylist4)

#sort
mynum = [4,32,25,5,6,78,1,]
mynum.sort()
print(mynum)
print('My List 3 sort & Nested list indexing')
mynum2 = [1,2,3,['x','y','z']]
print(mynum2[3])

print(mynum2[3][1])
 # List COMPREHENSION
matrix = [[1,2,3],[4,5,6],[7,8,9]]
first_col = [row[0] for row in matrix]
secound_col = [row[1] for row in matrix]
print(first_col)
print(secound_col)
