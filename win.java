
import java.util.Scanner;

class win{
    public static void main(String args[]){
        
        System.out.println("enter three number");
        Scanner sc= new Scanner(System.in);
        int a=sc.nextInt();
        int b=sc.nextInt();
        int c=sc.nextInt();
        if(a>b && a>c){
            System.out.println(+a+" is greater");
        }
        else if(b>a &&b>c){
            System.out.println(+b+" is greater");

        }
        else{
            System.out.println(+c+" is greater");
        }
        sc.close();


       
        
       
    }
}