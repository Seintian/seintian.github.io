<!DOCTYPE php>
<html lang="en">
    <head>
        <title>Form Validation</title>
    </head>
    <body>
        Welcome <?php echo $_POST["fname"]; ?><br>
        Your email address is: <?php echo $_POST["email"]; ?>
        <?php 
        
        $fname = $lname = $email = $password = "";
        $remember = $_POST['remember'];
        
        $fname = secure_input($_POST["fname"]);
        $lname = secure_input($_POST["lname"]);
        $email = secure_input($_POST["email"]);
        $password = secure_input($_POST["password"]);
        
        function secure_input($input) {
            return htmlspecialchars(stripslashes(trim($input)));
        }
        
        echo $fname, $lname, $email, $password, $remember;
        
        
        ?>

    </body>
</html>