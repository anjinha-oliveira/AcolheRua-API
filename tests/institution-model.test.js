const InstitutionModel = require('../src/models/institution-model')

describe('GET model test', () => {
  const institution = new InstitutionModel({
    'name': 'Instituição de caridade',
    'address': 'Boa vista, 333-Recife',
    'phone': '+55(81)9 9999-9999',
    'description': 'Doações de roupas'
  })
  institution.save()

  it('Deve chamar schema e retornar o nome correto da propriedade', () => {
    expect(institution.name).toBe('Instituição de caridade')
  })
  it('Deve chamar schema e retornar endereço correto da propriedade', () => {
    expect(institution.address).toBe('Boa vista, 333-Recife')
  })
  it('Deve chamar schema e retornar o telefone correto da propriedade', () => {
    expect(institution.phone).toBe('+55(81)9 9999-9999')
  })
  it('Deve chamar schema e retornar descrição correta da propriedade', () => {
    expect(institution.description).toBe('Doações de roupas')
  })
})