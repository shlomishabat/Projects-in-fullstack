<html>
    <title>Login</title>
    <body>
        <?php
        $usr = "admin";
        $psw = "password";
        $username = '$_POST[username]';
        $password = '$_POST[password]';
        //$usr == $username && $psw == $password
        session_start();
        if ($_SESSION['login']==true || ($_POST['username']=="admin" && $_POST['password']=="password")) {
            echo "password accepted";
            $_SESSION['login']=true;
        }else {
            echo "incorrect login";
        }
        ?>

        <form name="input" action="adminportal.php" method="get">
            <input type="submit" value="Home">
        </form>
    </body>
</html>