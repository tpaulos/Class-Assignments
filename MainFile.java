import java.util.Scanner;

public class MainFile {


    public static void main(String[] args) {

        // scanner reads input from the command line through various methods
        Scanner scanner = new Scanner(System.in);

        // prompt and read a string
        System.out.print("Enter your name: ");
        String username = scanner.next();

        // prompt and read an int
        System.out.print("Enter your age: ");
        int age = scanner.nextInt();

        System.out.println(String.format("Hello %s, your age is %d", username, age));


        //////////////////////////     LAB 1    //////////////////////////////////////////////////


        if (age >= 16)
            System.out.println(String.format("You are old enough to drive"));
        else
            System.out.println(String.format("You are not allowed to drive"));
        if (age >= 18)
            System.out.println(String.format("You are old enough to vote"));
        else
            System.out.println(String.format("You are not allowed to vote"));
        if (age >= 21)
            System.out.println(String.format("You are old enough to drink"));
        else
            System.out.println(String.format("You are not allowed to drink"));
        if (age >= 35)
            System.out.println(String.format("You are old enough to be President"));
        else
            System.out.println(String.format("You are not allowed to be President"));
        if (age >= 55)
            System.out.println(String.format("You can join AARP"));
        else
            System.out.println(String.format("You can not join AARP"));
        if (age >= 67)
            System.out.println(String.format("You can start drawing Social Security"));
        else
            System.out.println(String.format("You can not start drawing Social Security"));


        //////////////////////////    LAB 2   //////////////////////////////////////////////////


        System.out.println("Enter 'E' if you are Employed, 'U' are Unemployed and 'S' are a Student: ");
        char status = scanner.next().charAt(0);

        System.out.println("Enter 'C' if you have a car, 'T' have a truck, 'S' have suv and 'N' not own a vehicle: ");
        char vehicle = scanner.next().charAt(0);

        switch (status) {

            case 'E':
            case 'e':
                System.out.println("You are Employed");
                break;

            case 'U':
            case 'u':
                System.out.println("You are Unemployed");
                break;

            case 'S':
            case 's':
                System.out.println("You are a Student");
                break;
        }


        switch (vehicle) {

            case 'C':
            case 'c':
                System.out.println("You own a car");
                break;

            case 'T':
            case 't':
                System.out.println("You own a truck");
                break;

            case 'S':
            case 's':
                System.out.println("You own suv");
                break;

            case 'N':
            case 'n':
                System.out.println("You don`t own a vehicle");
                break;
        }

        ////////////////////////   LAB 3  //////////////////////////////////////////

        int[] myArray = new int[30];


        for(int i = 0; i < 30; i++) {
            myArray[i] = i;
        }

        for(int idx : myArray) {
            System.out.println("Enhanced for: " + idx + " ");
        }



        // Assign myArray even number upto 60.

        for (int i = 1; i < 30; i++) {

            myArray[0] = 0;
            myArray[i] = myArray[i - 1] + 2;

        }
              /*
        // Print out even No upto 60.
        for(int idx : myArray) {
            System.out.print("Enhanced for even No. upto 60: " + idx + " ");
        }

        //Reverse for loop
        for(int i = 29; i >= 0; i--) {
            System.out.print(myArray[i] + " ");
        }
                  */

        //////////////////////    LAB 4   ////////////////////////////////

        // Reverse while loop

        int i = 29;
        while (i >= 0) {
            System.out.print(myArray[i] + " ");
            i--;
        }

        // Print out while loop

        i++;
        while (i < 30) {
            System.out.print(myArray[i] + " ");
            i++;
        }


        char ch;
        do {

            System.out.println("Enter your name: ");
            System.out.println("Enter your name: ");
            username = scanner.next();

            System.out.println("Enter your age: ");
            age = scanner.nextInt();

            System.out.println("Do you want to answer the question again? Enter 'y' or 'n' ");
            ch = scanner.next().charAt(0);

            System.out.println(String.format("Hello %s, your age is %d", username, age));
        } while (ch == 'y');


      System.out.println(branching(10));
    }


    //////////////////////////////     LAB 5  ///////////////////////////////////////////////////////


    public static int branching(int x) {

        int[] myArray1 = new int[30];

  /*
        for(int j = 0; j < 30; j++) {

            myArray1[j] = j;
            if(j == x)
                break;
            else if(j%2 == 0)
                System.out.println(myArray1[j]);
            else
                continue;

        }

   */
        int sum = 0;

        for (int j = 0; j < 30; j++) {

            myArray1[j] = j;

            if (j == x)
                return sum;
            else if (j % 2 != 0)
                System.out.println(myArray1[j]);
            else
                sum += myArray1[j];

        }

      return sum;
    }

}
