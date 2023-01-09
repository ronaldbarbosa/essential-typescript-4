export class TodoItem {
    // Forma concisa para definir os atributos e o construtor da classe.
    constructor(public id: number, 
                public task: string, 
                public complete: boolean = false) {}

    printDetails(): void {
        console.log(`${ this.id }\t${ this.task } ${ this.complete ? "\t(complete)": "" }`);
    }
    // Na declaração do método, pode-se omitir o public, pois é assumido que métodos e atibubos sem 
    // o modificador de acesso são public.

    // Já no construtor, é necessário o uso de public para mostrar para o compilador que a sintaxe
    // concisa está sendo usada.
}