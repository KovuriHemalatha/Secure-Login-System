import java.util.ArrayList;
import java.util.Scanner;

/*
Project: Login Based User Access Application

CO1 – Algorithm Analysis
CO2 – Searching and Sorting Algorithms
CO3 – Lists (ArrayList used as List ADT)
CO4 – Stacks and Queues (conceptual use for request handling)
CO5 – Hashing and Priority Queues (conceptual use for secure storage)
*/

class User {
    String username;
    String password;

    User(String username, String password) {
        this.username = username;
        this.password = password;
    }
}

public class Login1 {

    // CO3: List ADT using ArrayList
    static ArrayList<User> users = new ArrayList<>();

    // Register user
    public static void register(String username, String password) {
        users.add(new User(username, password));
        System.out.println("User registered successfully!");
    }

    // CO2: Linear Search used for login verification
    public static boolean login(String username, String password) {

        for (User u : users) {
            if (u.username.equals(username) && u.password.equals(password)) {
                return true;
            }
        }

        return false;
    }

    // Display registered users
    public static void displayUsers() {

        if (users.isEmpty()) {
            System.out.println("No users found.");
            return;
        }

        System.out.println("\nRegistered Users:");

        for (User u : users) {
            System.out.println("Username: " + u.username);
        }
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        while (true) {

            System.out.println("\n===== Login Based User Access Application =====");
            System.out.println("1. Register");
            System.out.println("2. Login");
            System.out.println("3. Display Users");
            System.out.println("4. Exit");

            System.out.print("Enter your choice: ");
            int choice = sc.nextInt();
            sc.nextLine();

            switch (choice) {

                case 1:
                    System.out.print("Enter username: ");
                    String username = sc.nextLine();

                    System.out.print("Enter password: ");
                    String password = sc.nextLine();

                    register(username, password);
                    break;

                case 2:
                    System.out.print("Enter username: ");
                    String loginUser = sc.nextLine();

                    System.out.print("Enter password: ");
                    String loginPass = sc.nextLine();

                    if (login(loginUser, loginPass)) {
                        System.out.println("Login Successful!");
                    } else {
                        System.out.println("Invalid Username or Password.");
                    }
                    break;

                case 3:
                    displayUsers();
                    break;

                case 4:
                    System.out.println("Exiting program...");
                    sc.close();
                    System.exit(0);
                    break;

                default:
                    System.out.println("Invalid choice. Try again.");
            }
        }
    }
}