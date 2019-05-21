public class JavaLab1to7 {

    public static void main(String[] args) {

        //////////////////////////////////////////////////////////

        int firstInt = 6;
        int secondInt = 20;
        int thirdInt;
        float FirstFloat = 4.4f;
        boolean isCold = false;
        double First_Double = 22.22;

        System.out.println(firstInt);
        System.out.println(secondInt);
        //  System.out.println(thirdInt);
        System.out.println(FirstFloat);
        System.out.println(isCold);
        System.out.println(First_Double);


        /////////////////////////////////////////////////////////////

        int A = firstInt + secondInt;
        System.out.println(A);

        //  int B = firstInt + thirdInt;
        //  System.out.println(B);

        System.out.println(firstInt / secondInt);
        System.out.println(firstInt % secondInt);

        int C = firstInt + (firstInt % secondInt);
        System.out.println(++C);


        ////////////////////////////////////////////////////////////

        int x = 100;
        boolean D = (x == 100);
        int y = 106;

        System.out.println(x > y);
        System.out.println(y > x);
        System.out.println(x >= (y - 6));

        int z = 92;

        System.out.println((x < z) && (y < z));
        System.out.println((y < z) && (x >= y));
        System.out.println((z > y + x) || (x - y < z));

        System.out.println((x < y) && !(x > y));


        ///////////////////////////////////////////////////////////////


        int n = 64;

        System.out.println((n >> 1) == n / 2);
        System.out.println((n << 1) == n * 2);

        n = n - 24;

        System.out.println((n >> 1) == n / 2);
        System.out.println((n << 1) == n * 2);

        System.out.println((n >> 2) == n / 4);
        System.out.println((n << 2) == n * 4);

        n = n - 1;

        System.out.println((n >> 1) == n / 2);
        System.out.println((n << 1) == n * 2);


        anotherMethod();
        playWithStrings();

    }
        //////////////////////////////////////////////////////

        public static void anotherMethod() {

            int E =  200;
            Integer S =  Integer.valueOf("1000");
            Integer Y = Integer.compare(E, S);

            int F = E>>1;

            if(Y >= 0) {
                System.out.println(E + " is a Big Value");
                System.out.println(F + " is half the value of " + E);

            }
            else {
                System.out.println(E + " is Not a big value");
                System.out.println(F + " is definitely small");
            }

        }


        public static void playWithStrings(){

           String     name = new String("Paulos");
           String    lName = new String(" Teclehaymanot");

            System.out.println("Hello ".concat(name + lName) );
            System.out.println("Hello " + name + lName );

           String   fullName = new String("Paulos-Teclehaymanot");

            System.out.println("The total length of the String " + fullName + " is " + fullName.length());
            System.out.println("index of the first 'o' from the String " + fullName + " is " + fullName.indexOf('o') );
            System.out.println("The Charactor " + fullName.charAt(7) + " is the seventh in a String " + fullName  );
            System.out.println("Does the full name contain the word 'son'? " + fullName.contains("son"));

            int L = fullName.length();
            System.out.println("the last 5 letters in the String" + fullName + " is " + fullName.substring(L-5, L));
            System.out.println("Does the full name contain the charactor '`' or '-'? " + (fullName.contains("`") || fullName.contains("-")) );

        }


}
