import {Injectable} from "@angular/core";
import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from "@angular/common/http";
import {getToken} from "./SecurityHelper";
import {Observable} from "rxjs/index";

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req.headers.set("Authentication", "Bearer " + getToken());
        return next.handle(req)
    }
}
