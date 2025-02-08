
export const createVerificationEmailTemplate = (verificationLink: string) => {
    return `
<!DOCTYPE html>
<html>
<head>
    <title>Verify your email address</title>
    <style>
        .link {
           background: black;
            color: white;
            padding: 0.5rem 1rem;
            height: 1.5rem;
            margin: 1rem 0;
            display: flex;
            align-items: center;
            justify-content: center;
            width: fit-content;
            border-radius: 0.75rem;
            font-size: 16px;
        }
        .line {
            background: gray;
            width: 100%;
            height: 0.15rem;
            border-radius: 0.5rem;
            margin-bottom: 1rem;
        }
    </style>
</head>
<body style="padding: 1rem">

<img src="https://inception.id/images/inception.png" width="100" height="100" style="margin-bottom: 1rem;">

<h1>Verify your email</h1>
<p>Please click the button below to confirm your email address and finish setting up your account. This link is valid for 24 hours.</p>

<a class="link" href=${verificationLink}>Confirm</a>
<div class="line"></div>

<div style="display: flex;align-items: center; gap: 0.25rem;">
    <a href="https://inception.id">INCEPTION.ID</a>
    <span>  | Data processing, visualization, and analytics</span>
</div>

</body>
</html>
    `
};