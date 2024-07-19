import { Suspense } from "react";
import LoadingScreen from "../components/LoadingScreen";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Suspense fallback={null}>
        <LoadingScreen />
        {children}
      </Suspense>
    </section>
  );
}
