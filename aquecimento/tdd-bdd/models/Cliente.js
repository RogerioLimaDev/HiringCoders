module.exports = class cliente{
    constructor(){
        this.id = 0;
        this.nome = "";
        this.telefone = "";
    }

    nomeUppercase()
    {
        return this.nome.toUpperCase();
    }

    static primeiro(){
        return new cliente();
    }

    static todos(){
        return [
            new cliente(),//1
            new cliente(),//2
            new cliente(),//3
            new cliente(),//4
            new cliente(),//5
            new cliente(),//6
            new cliente(),//7
            new cliente(),//8
            new cliente(),//9
            new cliente()//10
        ];
    }
}