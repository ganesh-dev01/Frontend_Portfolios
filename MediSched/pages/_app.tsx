import "@/styles/globals.css";
import { ThemeState } from "@/Theme/Themestate";
import type { AppProps } from "next/app";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { LoadingProvider, useLoading } from "@/context/LoadingContext";
import LoadingIndicator from "@/components/LoadingIndicator";

function MyApp({ Component, pageProps }: AppProps) {
  const [supabase] = useState(() =>
    createBrowserSupabaseClient({
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL!,
      supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    })
  );

  const { loading, setLoading } = useLoading();
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router, setLoading]);

  return (
    <SessionContextProvider supabaseClient={supabase} initialSession={pageProps.initialSession}>
      <ThemeState>
        <Component {...pageProps} />
        {loading && <LoadingIndicator />}
      </ThemeState>
    </SessionContextProvider>
  );
}

export default function AppWrapper(props: AppProps) {
  return (
    <LoadingProvider>
      <MyApp {...props} />
    </LoadingProvider>
  );
}