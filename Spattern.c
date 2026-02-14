#include<stdio.h>
int main(){
    int n=12;
    for(int row=1;row<=n;row++){
        for(int col=1;col<=n;col++){
            if(row==n||row==1||row==n/2){
                printf("*");
            }
            else if(col==n&&row<n/2){
                printf("*");
            }
               else if(col==1&&row>n/2){
                printf("*");
            }
         
            else{
                printf(" ");
            }
        }
        printf("\n");
    }
    

}