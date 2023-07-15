"use client";

import React from "react";

export default function Login() {
  return (
    <>
      <form>
        <label>
          E - Mail
          <input type="text" name="mail" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit"> Login </button>
      </form>
    </>
  );
}
