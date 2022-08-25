public class Automovil {

    // Atributos
    int n_ruedas;
    int n_puertas;
    int kilometraje;
    String marca;
    boolean funcionando;
    String modelo;

    public void reparacion(int tiempo) {
        System.out.println("El auto esta en reparacion por " + tiempo + " horas");
        return;
    }

    public int getN_ruedas() { // METODO GET (OBTENER ATRIBUTO DE UN OBJETO)
        return this.n_ruedas;
    }

    public int getN_puertas() { // METODO GET
        return this.n_puertas;
    }

    public String getModelo() { // METODO GET
        return this.modelo;
    }

    public boolean getFuncionando() { // METODO GET
        return this.funcionando;
    }

    public int getKilometraje() { // METODO GET
        return this.kilometraje;
    }

    public void setN_ruedas(int numero) { // METODO SET (MODIFICAR ATRIBUTO DE UN OBJETO)
        this.n_ruedas = numero;
    }

    public void setModelo(String nombre) { // METODO SET
        this.modelo = nombre;
    }

    public void setKilometraje(int dato) { // METODO SET
        this.kilometraje = dato;
    }

    public void setFuncionando(boolean dato) { // METODO SET
        this.funcionando = dato;
    }

    public int trasladarse(String origen, String destino) { // METODO DE LA CLASE AUTOMOVIL
        System.out.println("Calculando distancia...");
        int distancia = 34;
        return distancia;

    }

    // CONSTRUCTOR
    public Automovil(int dato) {
        this.kilometraje = dato;
    }

}
