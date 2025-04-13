// 1. Define a prototype interface

interface RequestPrototype {
  clone(): RequestPrototype;
}

// 2. Concrete class implementing the prototype
export class ApiRequest implements RequestPrototype {
  endpoint: string;
  headers: Record<string, string>;
  payload: Record<string, any>;

  constructor(
    endpoint: string,
    headers: Record<string, string>,
    payload: Record<string, any>
  ) {
    this.endpoint = endpoint;
    this.headers = headers;
    this.payload = payload;
  }

  clone(): ApiRequest {
    // Deep clone to avoid mutating shared objects
    return new ApiRequest(
      this.endpoint,
      { ...this.headers },
      JSON.parse(JSON.stringify(this.payload))
    );
  }
}
