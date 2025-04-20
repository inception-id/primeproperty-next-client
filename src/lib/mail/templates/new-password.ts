export const createNewPasswordTemplate = (resetPasswordLink: string) => {
  return `
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Primepro Agent: New Password</title>
    </head>
    <body style="margin: 0; padding: 0; background-color: #f4f4f4">
      <table
        role="presentation"
        width="100%"
        cellpadding="0"
        cellspacing="0"
        style="background-color: #f4f4f4; padding: 20px 0"
      >
        <tr>
          <td align="center">
            <table
              role="presentation"
              width="600"
              cellpadding="0"
              cellspacing="0"
              style="
                background-color: #ffffff;
                border-radius: 8px;
                overflow: hidden;
              "
            >
              <!-- Header -->
              <tr>
                <td
                  align="center"
                  style="padding: 20px; background-color: #2a9df4"
                >
                  <a href="https://inception.id" target="_blank">
                    <img
                      src="https://inception.id/images/inception.png"
                      width="120"
                      alt="Primepro Logo"
                      style="display: block; border: 0"
                    />
                  </a>
                </td>
              </tr>
              <!-- Body -->
              <tr>
                <td
                  style="
                    padding: 30px;
                    font-family: Arial, sans-serif;
                    color: #333333;
                  "
                >
                  <h1
                    style="margin: 0 0 20px; font-size: 24px; font-weight: normal"
                  >
                    Reset Your Password
                  </h1>
                  <p style="margin: 0 0 20px; line-height: 1.5">
                    Hi,<br /><br />
                    Congratulations, your Primepro Agent account is ready to use.
                    Click the button below to create new password:
                  </p>
                  <p style="text-align: center; margin: 30px 0">
                    <a
                      href="${resetPasswordLink}"
                      role="button"
                      aria-label="Reset Your Password"
                      style="
                        background-color: #2a9df4;
                        color: #ffffff;
                        text-decoration: none;
                        padding: 15px 25px;
                        border-radius: 4px;
                        display: inline-block;
                        font-size: 16px;
                      "
                    >
                      Reset Password
                    </a>
                  </p>
                  <p
                    style="
                      margin: 0 0 20px;
                      line-height: 1.5;
                      font-size: 12px;
                      color: #777777;
                    "
                  >
                    If the button doesn’t work, copy and paste this link into your
                    browser:<br />
                    <a href="${resetPasswordLink}" style="color: #2a9df4">${resetPasswordLink}</a>
                  </p>
                  <p style="margin: 0; font-size: 12px; color: #777777">
                    This link will expire in 1 hour. If you have issue creating new
                    password, please contact
                    <a href="mailto:abby@primeproagent.com" style="color: #2a9df4"
                      >abby@primeproagent.com</a
                    >.
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
  `;
};
