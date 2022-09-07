import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner lector = new Scanner(System.in);
        Trotadora trotadora1 = new Trotadora();
        Boolean encender = trotadora1.encenderTrotadora();

        System.out.println("Bienvenido, ingrese su peso(kg.) actual:");
        int peso= lector.nextInt();
        Usuario usuario1 = new Usuario(peso);

        boolean decidirTrotar;

        if (usuario1.calcularPeso(peso)){
            usuario1.trotar(encender);
        }else{
            System.out.println("Aun asi desea trotar? \n 1:Si 2:No");
            int trotar= lector.nextInt();
            if (trotar==1){
                decidirTrotar=true;
            }else {
                decidirTrotar=false;
            }
            usuario1.trotar(decidirTrotar);

        }




    }
}
