const testModel = require('../src/models/institution-model')

describe('GET Test Controller', () => {
    const test = new testModel({
        'name': 'Igreja nao sei oq'
    })

    it('Deve chamar schema e retornar o novo valor desse campo', () => {
        expect(test.name).toBe('Igreja nao sei oq')
    })
})