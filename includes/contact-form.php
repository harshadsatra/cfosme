<?php

if( isset($_POST['name']) && isset($_POST['email']) && isset($_POST['msg']) && isset($_POST['phone']) ){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $msg = nl2br($_POST['msg']);
    $phone = $_POST['phone'];
    $from = $email;

    $to = "sachin.d@cfosme.in";
    $subject = 'CFOSME Contact Form Message';

    $message = '<b>Name:</b> '.$name.' <br><b>Email:</b> '.$email.' <br> <b>Phone:</b> '.$phone.' <p>'.$msg.'</p>';
    $headers = "From: $from\n";
    $headers .= "MIME-Version: 1.0\n";
    $headers .= "Content-type: text/html; charset=iso-8859-1\n";
    if( mail($to, $subject, $message, $headers) ) {
        $serialized_data = '{"type":"success", "message":"Contact form successfully submitted. Thank you, I will get back to you soon!"}';
        echo $serialized_data;
    } else {
        $serialized_data = '{"type":"danger", "message":"Contact form failed. Please send again later!"}';
        echo $serialized_data;
    }
};
