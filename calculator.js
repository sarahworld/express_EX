const express = require('express');
const { calculateMean, calculateMedian, calculateMode } = require('./utils')
const { ExpressError } = require('./expressErrors');

const app = express()

app.use(express.json())

app.get('/mean/:nums', (request, response, next)=> {
 
    const nums = JSON.parse("[" + request.params.nums + "]");
    console.log(nums)
    if(!nums || !Array.isArray(nums) || nums.length === 0) {
        throw new ExpressError("Invalid Nums!", 404);
    }
    var meanResult = calculateMean(nums)
    let result = {
        operation: "mean",
        result : meanResult
    }
    return response.status(200).json(result)
})


app.get('/', (request, response, next) => {
    response.send("Homepage")
})
app.get('/median/:nums', (request, response)=> {
    const nums = JSON.parse("[" + request.params.nums + "]");
    
    if(!nums || !Array.isArray(nums) || nums.length === 0) {
        throw new ExpressError("Bad Request, Nums are required!", 40);

    }
    var medianResult = calculateMedian(nums)
    let result = {
        operation: "median",
        result : medianResult
    }
    return response.status(200).json(result)
})


app.get('/mode/:nums', (request, response)=> {
    const nums = JSON.parse("[" + request.params.nums + "]");
    
    if(!nums || !Array.isArray(nums) || nums.length === 0) {
        throw new ExpressError("Bad Request, Nums are required!", 400);
    }
    var modeResult = calculateMode(nums)
    let result = {
        operation: "mode",
        result : modeResult
    }

    return response.status(200).json(result)
    
})

app.use(function (request, response, next){
    const err = new ExpressError("Bad Request, Nums are required!", 400);

    return next(err);
})

app.use(function(err, request, response, next){
    response.status(err.status || 500);
    let message = err.message;

    return response.json({
        error: { message}
    })
});



app.listen(3000, () => {
    console.log("App runing on port 3000")
})

