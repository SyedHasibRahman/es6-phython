arrayCheck([1, 1, 2, 3, 1])
def arrayCheck(nums):

    for i in range(len(nums)-2):
        if nums[i]==1 and nums[i+1]==2 and nums[i+2]==3:
            return True
    return False
print(arrayCheck)

def stringBits(str):

    result = ""

    for i in range(len(str)):
        if i%2 == 0:
            result = result + str[i]

    return result

# Uncompleted
