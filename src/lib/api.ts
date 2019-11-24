import RequestPromise from "request-promise-native";

export class Api {
  static get<T>(url: string): RequestPromise.RequestPromise<T> {
    return RequestPromise.get({
      baseUrl: this.baseUrl,
      json: true,
      uri: url
    });
  }

  private static baseUrl = "https://random-persons.herokuapp.com/";
}
