export const createShareStorageEmailTemplate = (
  sender: string,
  storageTitle: string,
  redirectLink: string,
) => {
  return `
<!DOCTYPE html>
<html>
<head>
    <title>You receive something from ${sender}</title>
</head>
<body style="padding: 1rem">

<img src="https://inception.id/images/inception.png" width="100" height="100" style="margin-bottom: 1rem;">

<h1>${sender} has shared "${storageTitle || "Untitled"}" document with you</h1>
<p>Click the link below to see what you receive</p>

<a  href="${redirectLink}" style="margin: 1rem 0;font-size: 14px;">${redirectLink}</a>

</body>
</html>
    `;
};
