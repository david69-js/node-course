const ordersSopa = (JsonObject) =>{
    const sopa =  JsonObject.filter(sopa => {
        return sopa.name == 'sopa'
    })
   return sopa
}

const ordersState = (JsonObject) =>{
    const sopa =  JsonObject.filter(sopa => {
        return sopa.state == 'paid'
    })
   return sopa
}


module.exports = {
    ordersSopa,
    ordersState
};