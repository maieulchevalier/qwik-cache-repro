import { component$ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
import Signin from "~/components/auth/signin";

export default component$(() => {
  const nav = useNavigate();
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "4rem",
        }}
      >
        <Signin />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "4rem",
        }}
      >
        <button onClick$={() => nav("/")}>Nav</button>
      </div>
      )
    </>
  );
});
