import type { HttpRequest, HttpResponse } from '../../protocols/http'
import { MissingParamError } from '../../utils/errors/missing-param-error'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new MissingParamError('name')
      }
    }
    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new MissingParamError('email')
      }
    }
    return {
      statusCode: 500,
      body: new Error('General error')
    }
  }
}
