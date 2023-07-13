const routerTest = (request, response) => {
  response.status(200).json({
    'name': 'Não sei',
    'address': 'eeee',
    
  })
}

module.exports = {
  routerTest
}