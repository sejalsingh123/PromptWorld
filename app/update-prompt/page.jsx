import { Suspense } from "react";
import EditPrompt from "./Edit_prompt";

export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <EditPrompt />
    </Suspense>
  );
}
