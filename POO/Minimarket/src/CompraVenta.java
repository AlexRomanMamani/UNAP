public class CompraVenta {
    // ATRIBUTOS
    String  tipo; // Venta o Compra
    String modalidad; // Si es precencial o online
    int folio;
    int precioProducto; // Valor fijo
    int cantidadProductos;
    String tipoProducto;
    String cliente;
    String proveedor;
    
    // CONSTRUCTOR

    public CompraVenta(String tipo, String modalidad, int folio, int cantidadProductos, String tipoProducto) {
        this.tipo = tipo;
        this.modalidad = modalidad;
        this.folio = folio;
        this.cantidadProductos = cantidadProductos;
        this.tipoProducto = tipoProducto;
    }
    
        
    // GETTERS Y SETTERS
    public String getTipo() {
        return this.tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }


    public String getModalidad() {
        return modalidad;
    }

    public void setModalidad(String modalidad) {
        this.modalidad = modalidad;
    }

    public int getFolio() {
        return folio;
    }

    public void setFolio(int folio) {
        this.folio = folio;
    }

    public int getPrecioProducto() {
        return precioProducto;
    }

    public void setPrecioProducto(int precioProducto) {
        this.precioProducto = precioProducto;
    }

    public int getCantidadProductos() {
        return cantidadProductos;
    }

    public void setCantidadProductos(int cantidadProductos) {
        this.cantidadProductos = cantidadProductos;
    }

    public String getTipoProducto() {
        return tipoProducto;
    }

    public void setTipoProducto(String tipoProducto) {
        this.tipoProducto = tipoProducto;
    }

    public String getCliente() {
        return cliente;
    }

    public void setCliente(String cliente) {
        this.cliente = cliente;
    }

    public String getProveedor() {
        return this.proveedor;
    }

    public void setProveedor(String proveedor) {
        this.proveedor = proveedor;
    }
    
    // METODO


    
    
    
}

