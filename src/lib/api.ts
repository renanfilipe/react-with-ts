import RequestPromise from "request-promise-native";

export class Api {
  private static baseUrl = "https://random-persons.herokuapp.com/";

  static get<T>(url: string): RequestPromise.RequestPromise<T> {
    return RequestPromise.get({
      baseUrl: this.baseUrl,
      uri: url,
      json: true
    });
  }
}
