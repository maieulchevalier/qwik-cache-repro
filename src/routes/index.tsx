import { component$ } from "@builder.io/qwik";
import { useNavigate, type DocumentHead, Link } from "@builder.io/qwik-city";
import Signout from "~/components/auth/signout";

import Infobox from "~/components/starter/infobox/infobox";

export default component$(() => {
  const nav = useNavigate();
  return (
    <>
      <div role="presentation" class="ellipsis"></div>
      <div role="presentation" class="ellipsis ellipsis-purple"></div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "4rem",
        }}
      >
        <button onClick$={() => nav("/demo/todolist")}>
          nav("/demo/todolist")
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "4rem",
        }}
      >
        <button onClick$={() => (window.location.href = "/demo/todolist")}>
          window.location.href = "/demo/todolist"
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "4rem",
        }}
      >
        <button onClick$={() => window.history.back()}>
          window.history.back()
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "4rem",
        }}
      >
        <Signout />
      </div>
      <div class="container container-flex">
        <div>
          <Infobox>
            <div q:slot="title" class="icon icon-apps">
              Example Apps with a tag
            </div>
            <p>
              Have a look at the <a href="/demo/flower">Flower App</a> or the
              <a href="/demo/todolist">Todo App</a>.
            </p>
          </Infobox>
          <Infobox>
            <div q:slot="title" class="icon icon-apps">
              Example Apps with Link tag
            </div>
            <p>
              Have a look at the <Link href="/demo/flower">Flower App</Link> or
              the
              <Link href="/demo/todolist">Todo App</Link>.
            </p>
          </Infobox>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
