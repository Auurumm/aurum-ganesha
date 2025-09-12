import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./tailwind.css";   // ✅ 올바른 경로: ./ 로 시작
import "./global.css";     // ✅ 이것도 올바름
import { ElementScreen } from "./screens/ElementScreen/ElementScreen";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <ElementScreen />
  </StrictMode>,
);