import com.sun.prism.shader.Texture_ImagePattern_AlphaTest_Loader;

public class Usuario {
    // ATRIBUTOS
    int pesoActual;
    int pesoIdeal = 80;
    Boolean trotando;
    Boolean necesitaTrotar;

    // GETTERS Y SETTERS
    public int getPesoActual() {
        return this.pesoActual;
    }

    public void setPesoActual(int pesoActual) {
        this.pesoActual = pesoActual;
    }

    public int getPesoIdeal() {
        return this.pesoIdeal;
    }

    public void setPesoIdeal(int pesoIdeal) {
        this.pesoIdeal = pesoIdeal;
    }

    // METODO TROTAR
    public void trotar(Boolean trotadoraEncendida){
        if (trotadoraEncendida){
            System.out.println("Usted ha comenzado rutina de trote.");

        }else {
            System.out.println("Se ha decidido no comenzar rutina de trote. Adios.");
        }

    }
    // METODO NECESITA EJERCICIO
    public Boolean calcularPeso(int PesoActual){

        if (PesoActual>pesoIdeal){
            System.out.println("Su peso actual excede el peso ideal ('"+pesoIdeal+" kg.')");
            necesitaTrotar=true;
        }else{
            System.out.println("Usted ya ha alcanzado su peso ideal.");
            necesitaTrotar=false;

        }
        return necesitaTrotar;
    }

    // CONSTRUCTOR
    public Usuario(int pesoActual) {
        this.pesoActual = pesoActual;
    }
}
