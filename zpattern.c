
#include<stdio.h>
int main(){
    int n=5;
    for(int row=5;row>=1;row--){
        for(int col=1;col<=n;col++){
            if(row==1||row==n||col==row-1+1){
                printf("*");
            }
            else{
                printf(" ");
            }
        }
        printf("\n");
    }
    

}
