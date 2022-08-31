public class Operaciones {
    String tipo; // arriendo o venta
    int valor;
    String cliente, nombrePelicula, fechaSalida, fechaRegreso;

    // CONSTRUCTOR
    public Operaciones(String tipo, int valor) {
        this.tipo = tipo;
        this.valor = valor;
    }

    // GETTERS Y SETTERS

    public String getTipo() {
        return this.tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public int getValor() {
        return this.valor;
    }

    public void setValor(int valor) {
        this.valor = valor;
    }

    public String getCliente() {
        return this.cliente;
    }

    public void setCliente(String cliente) {
        this.cliente = cliente;
    }

    public String getNombrePelicula() {
        return this.nombrePelicula;
    }

    public void setNombrePelicula(String nombrePelicula) {
        this.nombrePelicula = nombrePelicula;
    }

    public String getFechaSalida() {
        return this.fechaSalida;
    }

    public void setFechaSalida(String fechaSalida) {
        this.fechaSalida = fechaSalida;
    }

    public String getFechaRegreso() {
        return this.fechaRegreso;
    }

    public void setFechaRegreso(String fechaRegreso) {
        this.fechaRegreso = fechaRegreso;
    }

    // METODO
    public void nuevaOperacion(String TipoOperacion,String NombreOperacion,int Valor, String Cliente, String NombrePelicula,
                            String FechaSalida, String FechaRegreso){
        // en construccion metodo para generar una salida de producto.

    }
}
