import java.util.Scanner;

public class Trotadora {
    // ATRIBUTOS
    Boolean encendido;
    int nivelVelocidad;
    Scanner lector = new Scanner(System.in);

    // GETTERS Y SETTERS
    public Boolean getEncendido() {
        return this.encendido;
    }

    public void setEncendido(Boolean encendido) {
        this.encendido = encendido;
    }

    public int getNivelVelocidad() {
        return this.nivelVelocidad;
    }

    public void setNivelVelocidad(int nivelVelocidad) {
        this.nivelVelocidad = nivelVelocidad;
    }

    // METODO
    public Boolean encenderTrotadora(){


        System.out.println("Encender maquina trotadora? \n 1:Si 2:No");
        int opcion = lector.nextInt();

        if (opcion == 1) {
            encendido =true;
            System.out.println("Trotadora encendida");

        }else {
            encendido=false;
            System.out.println("Trotadora apagada");


        }
        return encendido;
    }

    public Trotadora() {
    }
}
