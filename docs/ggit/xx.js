Function.prototype.myCall = function (thisArg, ...args) {
  const fn = this
  
  thisArg = thisArg ? Object(thisArg) : window
  
  thisArg.fn = fn

  const result = thisArg.fn(...args)

  delete thisArg.fn
  return result 
}




foo.call({ name: 'frank' }, 1, 2, 3)

Function.prototype.myApply = function (thisArg, arrayArg) {
  const fn = this

  thisArg = thisArg ? Object(thisArg) : window

  arrayArg = arrayArg ? arrayArg : []
    
  thisArg.fn = fn 
  
  const result = thisArg.fn(...arrayArg)
  
  delete thisArg.fn
  return result  
}

foo.myApply({ name: 'frank' }, [1, 2, 3, 4])


Function.prototype.myBind = function (thisArg, ...args) {
  const fn = this 

  thisArg = thisArg ? Object(thisArg) : window
  thisArg.fn = fn

  return function (...args2) {
    var result = thisArg.fn(...args, ...args2)
    delete thisArg.fn
    return result
  }
}

// 防抖 
function debounce(fn , delay) {
  let timer = null
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}