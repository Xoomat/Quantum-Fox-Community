<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = htmlspecialchars($_POST['email']);

    // Убедитесь, что введены все необходимые данные
    if (!empty($name) && !empty($email)) {
        $to = 'xoomat262@gmail.com'; // Ваш email
        $subject = 'Новая Предрегистация';
        $message = "Email: $email";
        $headers = 'From: no-reply@example.com' . "\r\n" .
                   'Reply-To: no-reply@example.com' . "\r\n" .
                   'X-Mailer: PHP/' . phpversion();

        // Отправка письма
        if (mail($to, $subject, $message, $headers)) {
            echo 'Thank you for pre-registering!';
        } else {
            echo 'Sorry, there was a problem sending your request.';
        }
    } else {
        echo 'Please fill out all fields.';
    }
} else {
    echo 'Invalid request method.';
}
?>