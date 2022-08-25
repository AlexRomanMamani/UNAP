public class App {
    public static void main(String[] args) throws Exception {
        Automovil auto = new Automovil(1000); // INSTANCIAR OBJETO auto DE LA CLASE AUTOMOVIL
        auto.setKilometraje(50); // MODIFICAR ATRIBUTO DE UN OBJETO
        int km = auto.getKilometraje(); // OBTENER ATRIBUTO kilometraje DEL OBJETO auto

        System.out.println("El kilometraje del auto es: " + km); // IMPRIMIR ATRIBUTO kilometraje DEL OBJETO auto

        // IMPRIMIR METODO trasladarse DEL OBJETO auto
        System.out.println("El auto se ha trasladado " + auto.trasladarse("Iquique", "Pica"));

        Automovil auto2 = new Automovil(2000); // INSTANCIAR OBJETO auto2 DE LA CLASE AUTOMOVIL

        // IMPRIMIR ATRIBUTO kilometraje DEL OBJETO auto2
        System.out.println("El kilometraje del auto2 es: " + auto2.getKilometraje());
    }
}
