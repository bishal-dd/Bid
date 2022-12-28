import React from "react";

export default function ForgotPassword() {
  return (
    <div class="container">
      <form>
        <div>
          <button type="submit" class="btn">
            Email
          </button>
          <input type="email" required />
        </div>
      </form>
    </div>
  );
}
