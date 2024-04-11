declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GITHUB_TOKEN: string;
      OPENAI_API_KEY: string;
      X25519_PRIVATE_KEY: string;
      SUPABASE_ANON_KEY: string;
      SUPABASE_URL: string;
    }
  }
}

export {};
