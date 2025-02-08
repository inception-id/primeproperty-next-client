export const createVerificationEmailTemplate = (verificationLink: string) => {
  return `
<!DOCTYPE html>
<html>
<head>
    <title>Verify your email address</title>
</head>
<body style="padding: 1rem">

<img src="https://inception.id/images/inception.png" width="100" height="100" style="margin-bottom: 1rem;">

<h1>Verify your email</h1>
<p>Please click the link below to confirm your email address and finish setting up your account. This link is valid for 24 hours.</p>

<a  href=${verificationLink} style="margin: 1rem 0;font-size: 14px;">VERIFICATION LINK</a>

</body>
</html>
    `;
};
