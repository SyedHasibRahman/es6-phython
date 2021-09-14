var a = 'abc'

function test(n) {
  function a() {
    return n%3 === 0
  }
  function b(){
    return n%5 ===0
  }
  if(a() && b()){
    console.log('Valid Number');
  }else{
    console.log('Not a valid number')
  }
}

test(10)
