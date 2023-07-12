const routerTest = (request, response) => {
  response.status(200).json({
    message: "Hello World"
  })
}

module.exports = {
  routerTest
}