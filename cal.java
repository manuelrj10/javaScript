
import java.util.Scanner;

class cal{
    public static void main(String args[]){

        System.out.println("enter two numbers");
        Scanner sc=new Scanner(System.in);
        int num1=sc.nextInt();
        System.out.println("enter the operation");
        String op=sc.nextLine();
        int num2=sc.nextInt();
        
        switch(op){
            case "+":
                int sum=num1+num2;
                System.out.println(sum);
                break;
            case "-":
                int dif=num1-num2;
                System.out.println(dif);
                break;
            case "*":
                int prod=num1*num2;
                System.out.println(prod);
                break;
            case "/":
                
                System.out.println(num1/num2);
                break;
            default:
                System.out.println("invalid operator");

        }
    }
}