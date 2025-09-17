export const resetMessage = (url) => {
    return {
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2>Password Reset Request</h2>
          <p>We received a request to reset your password.</p>
          <p>Click the button below to reset your password:</p>
          <a href="${url}" 
             style="display:inline-block;padding:10px 20px;margin:10px 0;background:#007bff;
                    color:#fff;text-decoration:none;border-radius:5px;">
            Reset Password
          </a>
          <p>If you did not request this, you can safely ignore this email.</p>
          <p>Thank you,<br/>The Support Team</p>
        </div>
      `,
        text:`Password Reset Request\n\nWe received a request to reset your password.\n\n
                Please click the link below to reset your password:\n${url}\n\n
                If you did not request this, you can safely ignore this email.\n\n
                Thank you,\nThe Support Team`,
    };
  };
  