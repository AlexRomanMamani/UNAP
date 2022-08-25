public class Empleado {
    // Atributos
    String nombre;
    String apellido;
    String direccion;
    String cargo;
    int sueldo;
    String fechaIngreso;
    boolean activo;
    String fechaNacimiento;
    String estadoCivil;

    // Constructor
    public Empleado(String cargo) {
        this.cargo = cargo;
    }

    // Metodos
    public String cambiarCargo(String cargo) {
        return cargo;
    }

    public void calcularSueldo(int num1, int num2) {
        this.sueldo = num1 + num2;
    }

    public int getSueldo(int sueldo) {
        return this.sueldo;
    }

    public String getCargo() {
        return this.cargo;
    }

    public void setCargo(String cargo) {
        this.cargo = cargo;
    }

}
