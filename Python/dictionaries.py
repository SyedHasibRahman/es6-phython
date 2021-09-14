# Dictionaries
my_stuff = {"key1":"Value","key2":"Value2","key3":{'123':[1,2,'grabMe']}}
print(my_stuff['key1'])
print('Secound one')
print(my_stuff["key2"])
print(my_stuff)
print(my_stuff["key3"]['123'][2].upper())

# Reassain
my_stuff2 = {'lunch':'pizza','bfast':'eggs'}
my_stuff2['lunch'] = 'burger'
print(my_stuff2["lunch"])
#Add new Value
my_stuff2['dinner'] = 'pasta'
print(my_stuff2)
