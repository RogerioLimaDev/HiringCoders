
describe ('cliente', () =>{
    const client = require('../../models/Cliente');

    beforeEach(()=>{

    })

    it('Valida cliente',()=>{
        let cliente = client.primeiro();
        expect(cliente.id).not.toBeUndefined();
        expect(cliente.nome).not.toBeUndefined();
        expect(cliente.telefone).not.toBeUndefined();
    });


    it('Retorna dados',()=>{
        let clientes = client.todos();
        // expect(client.todos().length).toEqual(10);
        expect(clientes.length).toEqual(10);

    });

    it('Nome cliente uppercase',()=>{

        let clienteUC = client.primeiro();
        clienteUC.nome = "Rogerio Lima";
        expect(clienteUC.nomeUppercase()).toEqual("ROGERIO LIMA");

    });
});