module.exports={
    resolve:{
        fallback:{
            "querystring" : false,
            "crypto": require.resolve("crypto-browserify")
        }
    }
}