const InstitutionModel = require('../src/models/institution-model')

describe('GET Test Controller', () => {
    const institution = new InstitutionModel({
        'name': 'Igreja nao sei oq'
    })

    it('Deve chamar schema e retornar o novo valor desse campo', () => {
        expect(institution.name).toBe('Igreja nao sei oq')
    })
})