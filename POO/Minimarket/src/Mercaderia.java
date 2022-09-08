
public class Mercaderia {
    // ATRIBUTOS
    String nombre;
    int cantidadProductos;
    int precioProductos;

    Mercaderia() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
    // SETTERS Y GETTERS

    public String getNombre() {
        return this.nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getCantidadProductos() {
        return this.cantidadProductos;
    }

    public void setCantidadProductos(int cantidadProductos) {
        this.cantidadProductos = cantidadProductos;
    }

    public int getPrecioProductos() {
        return this.precioProductos;
    }

    public void setPrecioProductos(int precioProductos) {
        this.precioProductos = precioProductos;
    }
    
    // CONSTRUCTOR

    public Mercaderia(String nombre, int cantidadProductos, int precioProductos) {
        this.nombre = nombre;
        this.cantidadProductos = cantidadProductos;
        this.precioProductos = precioProductos;
    }
    

  
    
}
