import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent, HttpHandler, HttpRequest, HttpInterceptor } from '@angular/common/http';

@Injectable()
export class Interceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler) {
        console.log(`${request.method.toUpperCase()} ${request.url}`)

        let authRequest: HttpRequest<any>;
        if (request.url != "/api/authentication/login") {
            // TODO: Get token from session storage
            let token = sessionStorage.getItem("token");
            
            authRequest = request.clone({ setHeaders: { Authorization: token } });
        }

        return next.handle(authRequest);
    }
}
