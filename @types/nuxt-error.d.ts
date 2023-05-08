declare module "#app" {
  interface NuxtError {
    data: {
      additionalMessage: string;
    };
  }
}

export {};
