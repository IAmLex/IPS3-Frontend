import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent, HttpHandler, HttpRequest, HttpInterceptor } from '@angular/common/http';
import { MethodCall } from '@angular/compiler';

@Injectable()
export class Interceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler) {
        console.log(`${request.method.toUpperCase()} ${request.url}`)

        let authRequest: HttpRequest<any>;
        let isLoginRequest = request.url.includes("/api/authentication/login");
        let isRegisterRequest = request.method.toUpperCase() === "POST" &&  request.url.includes("/api/user");
        if (!isLoginRequest && !isRegisterRequest) {
            // TODO: Get token from session storage
            let token = sessionStorage.getItem("token");
            
            authRequest = request.clone({ setHeaders: { Authorization: token } });
        } else {
            authRequest = request;
        }

        return next.handle(authRequest);
    }
}
