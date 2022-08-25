public class App {
    public static void main(String[] args) throws Exception {

        Persona persona1 = new Persona("Alex", "Mamani");
        System.out.println("Nombre de persona1: " + persona1.getNombre());

        Empleado empleado1 = new Empleado("Contador");
        System.out.println("Cargo: " + empleado1.getCargo());

        String nuevoCargo = empleado1.cambiarCargo("Jefe");

        empleado1.setCargo(nuevoCargo);

        System.out.println("Nuevo cargo: " + empleado1.getCargo());

        persona1.cargo = empleado1.cargo;
        System.out.println("Cargo de persona1: " + persona1.cargo);

    }
}
