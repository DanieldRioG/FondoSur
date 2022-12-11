/**
 * Class designed to be called with delayed recursive;
 */
export default class CuentaAtrasSegundos {
    constructor(segundos) {
        if (segundos > 0)
            this.segundos = segundos;
        else
            return null;
        return segundos;
    }
    /**
     * Takes out one second;
     * @returns The seconds left;
     */
    clock() {
        this.segundos -= 1;
        return this.segundos + 1;
    }
}