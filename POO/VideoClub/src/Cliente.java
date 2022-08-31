public class Cliente {
    // ATRIBUTOS
    String nombre, rut, contacto;

    // CONSTRUCTOR

    public Cliente(String nombre) {
        this.nombre = nombre;
    }

    // SETTERS Y GETTERS

    public String getNombre() {
        return this.nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getRut() {
        return this.rut;
    }

    public void setRut(String rut) {
        this.rut = rut;
    }

    public String getContacto() {
        return this.contacto;
    }

    public void setContacto(String contacto) {
        this.contacto = contacto;
    }

    // METODO
    public void infoCliente(){
        System.out.println("Cliente " + this.nombre + ", rut "+this.rut+ "," +
                " contacto "+this.contacto);
    }
}
