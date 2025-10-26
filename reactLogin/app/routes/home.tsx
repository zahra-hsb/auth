import Login from "~/components/login/Login";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login Page" },
    { name: "description", content: "It's a login page to a world that you might love it!" },
  ];
}

export default function Home() {
  return <Login />;
}
